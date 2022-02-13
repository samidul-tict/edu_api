const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { Content, validate, validateUpdate } = require('../models/content');
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
const auth = require('../middeware/auth');
const { auditFunc } = require('../models/audit');
const admin = require('../middeware/admin');
const role = require('../middeware/role');
var base64ToImage = require('base64-to-image');
const { azureNotesUpload } = require('../util/upload');
const multer = require("multer");
const fileSchema = [
    {
        name: "contentfile",
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
 
// Add Content role(1)
router.post('/add', [auth, admin, ], upload.fields(fileSchema), async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    console.log(req.file);
    var NewBody = req.body;

    NewBody.description = entities.encode(req.body.description)
    content = new Content(_.pick(NewBody, ['name', 'subccontentname', 'description', 'subjectId', 'chapterId', 'contentfile', 'contentvideo', 'fileType']));
    let url = "";
    if(req.file){
        const fileName   = req.files["contentfile"][0].filename;
        const filePath   = req.files["contentfile"][0].path;
        url = azureNotesUpload(fileName,filePath);
    }

    content.contentfile = url;
    content.createdBy = req.user._id;
    await content.save()
    auditFunc({
        admin: req.user._id,
        title: 'Add Content',
        description: `${content.name} created.`,
        ip: req.ip
    })
    res.status(201).send({ message: "Content saved successfully." });
});

// Subject List role(0)
router.get('/', [auth, admin], async (req, res) => {
    //console.log("test");
    let pageIndex = parseInt(req.query.pageIndex);
    let pageSize = parseInt(req.query.pageSize);
    let sort = req.query.sort;
    const count = await Subject.countDocuments({ softDelete: '0' });
    const subjct = await Subject.find({ softDelete: '0' })
        .skip((pageIndex - 1) * pageSize)
        .limit(pageSize)
        .sort(sort).select("name code description stateboardId standardId image points");
    var Newarr = []
    for (var i = 0; i < subjct.length; i++) {
        var NewObjarr = {}
        NewObjarr["_id"] = subjct[i]._id;
        NewObjarr["name"] = subjct[i].name;
        NewObjarr["code"] = subjct[i].code;
        NewObjarr["description"] = entities.decode(subjct[i].description);
        NewObjarr["stateboardId"] = subjct[i].stateboardId;
        NewObjarr["standardId"] = subjct[i].standardId;
        NewObjarr["image"] = subjct[i].image;
        NewObjarr["points"] = subjct[i].points;
        Newarr.push(NewObjarr)
    }
    res.status(200).send({ data: Newarr, count: count, message: 'Get subject successfully.' });
})

// Content List for App
router.post('/list', auth, async (req, res) => {
    //console.log("vxcvxc");
    if(req.body.fileType == 'P'){
        const records = await Content.find({ subjectId: req.body.subjectId,chapterId: req.body.chapterId,fileType: req.body.fileType, isActive: '1', softDelete: '0' }).select("name subccontentname code description subjectId chapterId contentfile contentvideo fileType")
        var Newarr = []
        for (var i = 0; i < records.length; i++) {
            var NewObjarr = {}
            NewObjarr["_id"] = records[i]._id;
            NewObjarr["name"] = records[i].name;
            NewObjarr["subccontentname"] = records[i].subccontentname;
            NewObjarr["description"] = entities.decode(records[i].description);
            NewObjarr["subjectId"] = records[i].subjectId;
            NewObjarr["chapterId"] = records[i].chapterId;
            NewObjarr["contentfile"] = records[i].contentfile;
            NewObjarr["contentvideo"] = records[i].contentvideo;
            NewObjarr["fileType"] = records[i].fileType;
            Newarr.push(NewObjarr)
        }  
        res.status(200).send({ data: Newarr, message: 'Get content successfully.' });
    }else{
        const records = await Content.find({ subjectId: req.body.subjectId,chapterId: req.body.chapterId,fileType: req.body.fileType, isActive: '1', softDelete: '0' }).select("name subccontentname code description subjectId chapterId contentfile contentvideo fileType")
        var Newarr = []
        for (var i = 0; i < records.length; i++) {
            var NewObjarr = {}
            NewObjarr["_id"] = records[i]._id;
            NewObjarr["name"] = records[i].name;
            NewObjarr["subccontentname"] = records[i].subccontentname;
            NewObjarr["description"] = entities.decode(records[i].description);
            NewObjarr["subjectId"] = records[i].subjectId;
            NewObjarr["chapterId"] = records[i].chapterId;
            NewObjarr["contentfile"] = records[i].contentfile;
            NewObjarr["contentvideo"] = records[i].contentvideo;
            NewObjarr["fileType"] = records[i].fileType;
            Newarr.push(NewObjarr)
        }
        res.status(200).send({ data: Newarr, message: 'Get content successfully.' });
    }
})

// Subject Details
router.get('/:id', [auth, admin,], async (req, res) => {
    const subject = await Subject.findById(req.params.id).select("-__v -isActive -_id");
    if (!subject) return res.status(404).send({ message: "Subject with following id not found" });
    subject.description = entities.decode(language.description)
    res.status(200).send({ data: subject, message: 'Get subject successfully.' });
})

// Update a Subject
router.put('/:id', [auth, admin, role(2)], async (req, res) => {
    const { error } = validateUpdate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
    var NewBody = req.body;
    NewBody.description = entities.encode(req.body.description)
    let obj = _.pick(NewBody, ['name', 'code', 'description', 'stateboardId', 'standardId', 'image', 'points'])
    obj.modifiedBy = req.user._id;
    const subject = await Subject.findByIdAndUpdate(
        req.params.id,
        obj,
        { new: true }
    ).select('name,code,description')

    if (!subject)
        return res.status(404).send({ message: "Subject with following id not found !" });
    auditFunc({
        admin: req.user._id,
        title: 'Update Subject',
        description: `${obj.name} updated`,
        ip: req.ip
    })
    res.status(201).send({ message: "Subject update successfully." });
});



module.exports = router;