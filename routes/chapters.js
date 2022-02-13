const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { Chapter, validate, validateUpdate } = require('../models/chapter');
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
const auth = require('../middeware/auth');
const { auditFunc } = require('../models/audit');
const admin = require('../middeware/admin');
const role = require('../middeware/role');
var base64ToImage = require('base64-to-image');

// Add Chapter role(1)
router.post('/add', [auth, admin, ], async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    let chapter = await Chapter.findOne({ name: req.body.name });
    if (chapter) return res.status(409).send({ message: "Chapter already exist." });
    var NewBody = req.body;

    NewBody.description = entities.encode(req.body.description)
    chapter = new Chapter(_.pick(NewBody, ['name', 'subchaptername', 'description', 'subjectId', 'image']));

    if (req.body.image) {
        var base64Str = req.body.image;
        var path = 'uploads/chapters/';
        var imageFileName = Math.floor(Math.random() * 899999 + 100000);
        var imageName = imageFileName.toString();
        var optionalObj = { 'fileName': imageName, 'type': 'png' };
        var conversion = base64ToImage(base64Str, path, optionalObj);
        chapter.image = conversion.fileName;
    } 

    chapter.createdBy = req.user._id;
    await chapter.save()
    auditFunc({
        admin: req.user._id,
        title: 'Add Chapter',
        description: `${chapter.name} created.`,
        ip: req.ip
    })
    res.status(201).send({ message: "Chapter saved successfully." });
});

// Chapter List role(0)
router.get('/', [auth, admin], async (req, res) => {
    //console.log("test");
    let pageIndex = parseInt(req.query.pageIndex);
    let pageSize = parseInt(req.query.pageSize);
    let sort = req.query.sort;
    const count = await Subject.countDocuments({ softDelete: '0' });
    const chapter = await Chapter.find({ softDelete: '0' })
        .skip((pageIndex - 1) * pageSize)
        .limit(pageSize)
        .sort(sort).select("name description subjectId image");
    var Newarr = []
    for (var i = 0; i < chapter.length; i++) {
        var NewObjarr = {}
        NewObjarr["_id"] = chapter[i]._id;
        NewObjarr["name"] = chapter[i].name;
        NewObjarr["description"] = entities.decode(chapter[i].description);
        NewObjarr["subjectId"] = chapter[i].subjectId;
        NewObjarr["image"] = chapter[i].image;
        Newarr.push(NewObjarr)
    }
    res.status(200).send({ data: Newarr, count: count, message: 'Get chapter successfully.' });
})

// Chapter List App
router.post('/list', auth, async (req, res) => {
    //console.log("vxcvxc");
    const chapter = await Chapter.find({ subjectId: req.body.subjectId,isActive: '1', softDelete: '0' }).select("name subchaptername description subjectId image")
    var Newarr = []
    for (var i = 0; i < chapter.length; i++) {
        var NewObjarr = {}
        NewObjarr["_id"] = chapter[i]._id;
        NewObjarr["name"] = chapter[i].name;
        NewObjarr["subchaptername"] = chapter[i].subchaptername;
        NewObjarr["description"] = entities.decode(chapter[i].description);
        NewObjarr["subjectId"] = chapter[i].subjectId;
        NewObjarr["image"] = chapter[i].image;
        Newarr.push(NewObjarr)
    }
    res.status(200).send({ data: Newarr, message: 'Get chapter successfully.' });
})

// Chapter Details
router.get('/:id', [auth, admin,], async (req, res) => {
    const chapter = await Chapter.findById(req.params.id).select("-__v -isActive -_id");
    if (!chapter) return res.status(404).send({ message: "Chapter with following id not found" });
    chapter.description = entities.decode(chapter.description)
    res.status(200).send({ data: chapter, message: 'Get chapter successfully.' });
})

// Update a Chapter
router.put('/:id', [auth, admin, role(2)], async (req, res) => {
    const { error } = validateUpdate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
    var NewBody = req.body;
    NewBody.description = entities.encode(req.body.description)
    let obj = _.pick(NewBody, ['name', 'code', 'description'])
    obj.modifiedBy = req.user._id;
    const chapter = await Chapter.findByIdAndUpdate(
        req.params.id,
        obj,
        { new: true }
    ).select('name,description,')

    if (!chapter)
        return res.status(404).send({ message: "Chapter with following id not found !" });
    auditFunc({
        admin: req.user._id,
        title: 'Update Chapter',
        description: `${obj.name} updated`,
        ip: req.ip
    })
    res.status(201).send({ message: "Chapter update successfully." });
});



module.exports = router;