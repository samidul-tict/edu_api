const auth = require('../middeware/auth');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const express = require('express');
const router = express.Router();
const { Student, validate, validateUpdate } = require('../models/student');
const { indexOf } = require('lodash');
const { auditFunc } = require('../models/audit');
const admin = require('../middeware/admin');
const role = require('../middeware/role');
const { baseUrl } = require('../util/constants');
const { azureStudentsUpload } = require('../util/upload');
const multer = require("multer");
const fileSchema = [
    {
        name: "image",
        maxCount: 1,
    }
];
const storage = multer.diskStorage({
    // destination: (req, file, callback) => {
    //     callback(null, "uploads/contents/");
    // },
    filename: (req, file, callback) => {
        if (file) {
            const filename = file.originalname.replace(/\s/g, "");
            callback(null, `eduwati_`+Math.floor(Math.random() * 899999 + 100000)+`${filename}`);
        }
    },
});
const upload = multer({ storage: storage });
// Student List for Admin
router.get('/', [auth, admin, ], async (req, res) => {
    let pageIndex = parseInt(req.query.pageIndex);
    let pageSize = parseInt(req.query.pageSize);
    let sort = req.query.sort;
    const count = await Player.countDocuments({ softDelete: '0' });
    const playerlist = await Player.find({ softDelete: '0' })
        .skip((pageIndex - 1) * pageSize)
        .limit(pageSize)
        .sort(sort).select("name email phone gender referralCode isActive referredBy createdDate")
    res.send({ playerlist: playerlist, count: count });
})

// Update Status of a Student (Admin)
router.put('/:id', [auth, admin, ], async (req, res) => {

    const player = await Player.findById(req.params.id,)

    if (!player)
        return res.status(404).send({ message: "The player with following id not found !" });

    player.isActive = player.isActive === "1" ? "0" : "1";
    player.save();

    auditFunc({
        admin: req.user._id,
        title: 'Player Status Changed',
        description: `Status of ${player.name} changed to  ${player.isActive}`,
        ip: req.ip
    })

    res.send({ message: "Player Status Successfully Updated" });
});

// Register a student for App
router.post('/register', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    let student = await Student.findOne({ phone: req.body.phone });
    if (student) return res.status(409).send({ "message": "Student already registered." });

    let otp = Math.floor(1000 + Math.random() * 9000);

    student = new Student({
        name: req.body.name, 
        phone: req.body.phone,
        languageId: req.body.languageId,
        otp: otp
    });
    if (await student.save()) {
        return res.status(201).send({"data":student,"message":"Registration Successfully."});
    }else{
        return res.status(409).send({"data":[],"message":"Bad Request."});
    }
});

// Validate OTP for App
router.post('/validate-otp', async (req, res) => {
    if (!req.body.otp) return res.status(400).send({ message: "OTP is required." });

    let student = await Student.findOne({ phone: req.body.phone, otp: req.body.otp });
    if (!student) return res.status(400).send({ "data":req.body,"message": "Invalid OTP" });

    let otp = Math.floor(1000 + Math.random() * 9000);
    student.otp = otp;
    student.save();

    const token = student.generateAuthToken();
    res.status(200).header('Authorization', token).send({"data":student,"message":"Otp validation successful."});
})

// App login for App
router.post('/login', async (req, res) => {
    if (!req.body.phone) return res.status(400).send({ message: "Phone is required." });

    let student = await Student.findOne({ phone: req.body.phone });
    if (!student) return res.status(400).send({ "data":req.body,"message": "Invalid Phone No." });

    res.status(200).send({"data":student,"message":"OTP send successful."});
})
// Validate OTP for App
router.post('/otpcheck', async (req, res) => {
    if (!req.body.otp) return res.status(400).send({ message: "OTP is required." });

    let student = await Student.findOne({ phone: req.body.phone, otp: req.body.otp });
    if (!student) return res.status(400).send({ "data":req.body,"message": "Invalid OTP" });

    let otp = Math.floor(1000 + Math.random() * 9000);
    student.otp = otp;
    student.save();

    const token = student.generateAuthToken();
    res.status(200).header('Authorization', token).send({"data":student,"message":"Login successful."});
})
 
// Update a student for app
router.put('/', auth, upload.fields(fileSchema), async (req, res) => {
    const { error } = validateUpdate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    let obj = _.pick(req.body, ['name', 'gender', 'languageId', 'stateboardId', 'standardId', 'instituteId', 'image'])

    let url = "";
    if(req.file){
        const fileName   = req.files["image"][0].filename;
        const filePath   = req.files["image"][0].path;
        url = azureStudentsUpload(fileName,filePath);
    }
    console.log(url);
    obj.image = url;
    obj.isProfileComplete = '1';
    const student = await Student.findByIdAndUpdate(
        req.user._id,
        obj,
        { new: true }
    ).select('name gender phone languageId stateboardId standardId instituteId isProfileComplete image')

    if (!student)
        return res.status(404).send({ message: "The student with following id not found!" });

    auditFunc({
        student: req.user._id,
        title: 'Student Updated',
        description: obj,
        ip: req.ip
    })

    return res.status(200).send({ data: student,message: "Update successfully." });
});

// Resend OTP for App
router.put('/resend-otp', auth, async (req, res) => {
    let player = await Player.findById(req.user._id);
    if (!player) return res.status(404).send({ message: "Player not registered." });

    player.otp = Math.floor(1000 + Math.random() * 9000);
    player.save();
    res.send({ otp: player.otp, message: "OTP sent successfully" })
})

// Reset Password for App
router.put('/reset-password', auth, async (req, res) => {
    if (!req.body.newPassword) return res.status(400).send({ message: "Enter New Password" });

    const salt = await bcrypt.genSalt(10);

    const password = await bcrypt.hash(req.body.newPassword, salt);
    const player = await Player.findByIdAndUpdate(req.user._id, {
        password: password
    })

    if (!player) return res.status(404).send({ message: "User Not Found." });

    res.send({ message: "Password reset Successfully" });
})

// Forgot Password for App
router.put('/forgot-password', async (req, res) => {
    if (!req.body.phone) return res.status(400).send({ message: "Enter Phone Number" });

    const player = await Player.findOne({ phone: req.body.phone });
    if (!player) return res.status(400).send({ message: "Enter Registered Phone Number" });

    player.otp = Math.floor(1000 + Math.random() * 9000);
    player.save();

    const token = player.generateAuthToken();
    res.header('Authorization', token).send({ otp: player.otp, message: "OTP sent successfully" });
})




module.exports = router;