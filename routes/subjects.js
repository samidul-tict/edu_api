const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { Subject, validate, validateUpdate } = require('../models/subject');
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
const auth = require('../middeware/auth');
const { auditFunc } = require('../models/audit');
const admin = require('../middeware/admin');
const role = require('../middeware/role');
var base64ToImage = require('base64-to-image');

// Add Subject role(1)
router.post('/add', [auth, admin, ], async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    let subject = await Subject.findOne({ name: req.body.name });
    if (subject) return res.status(409).send({ message: "Subject already exist." });
    var NewBody = req.body;

    NewBody.description = entities.encode(req.body.description)
    subject = new Subject(_.pick(NewBody, ['name', 'code', 'description', 'stateboardId', 'standardId', 'image', 'points']));

    if (req.body.image) {
        var base64Str = req.body.image;
        var path = 'uploads/subjects/';
        var imageFileName = Math.floor(Math.random() * 899999 + 100000);
        var imageName = imageFileName.toString();
        var optionalObj = { 'fileName': imageName, 'type': 'png' };
        var conversion = base64ToImage(base64Str, path, optionalObj);
        subject.image = conversion.fileName;
    } 

    subject.createdBy = req.user._id;
    await subject.save()
    auditFunc({
        admin: req.user._id,
        title: 'Add Subject',
        description: `${subject.name} created.`,
        ip: req.ip
    })
    res.status(201).send({ message: "Subject saved successfully." });
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

// Subject List App
router.post('/list', auth, async (req, res) => {
    //console.log("vxcvxc");
    const subject = await Subject.find({ stateboardId: req.body.stateboardId,standardId: req.body.standardId,isActive: '1', softDelete: '0' }).select("name code description stateboardId standardId image points")
    var Newarr = []
    for (var i = 0; i < subject.length; i++) {
        var NewObjarr = {}
        NewObjarr["_id"] = subject[i]._id;
        NewObjarr["name"] = subject[i].name;
        NewObjarr["code"] = subject[i].code;
        NewObjarr["description"] = entities.decode(subject[i].description);
        NewObjarr["stateboardId"] = subject[i].stateboardId;
        NewObjarr["standardId"] = subject[i].standardId;
        NewObjarr["image"] = subject[i].image;
        NewObjarr["points"] = subject[i].points;
        Newarr.push(NewObjarr)
    }
    res.status(200).send({ data: Newarr, message: 'Get subject successfully.' });
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