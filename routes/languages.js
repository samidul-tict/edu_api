const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { Language, validate, validateUpdate } = require('../models/language');
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
const auth = require('../middeware/auth');
const { auditFunc } = require('../models/audit');
const admin = require('../middeware/admin');
const role = require('../middeware/role');

// Add Language role(1)
router.post('/add', [auth, admin, ], async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    let language = await Language.findOne({ name: req.body.name });
    if (language) return res.status(409).send({ message: "Language already exist." });
    var NewBody = req.body;
    NewBody.description = entities.encode(req.body.description)
    language = new Language(_.pick(NewBody, ['name', 'code', 'description']));
    language.createdBy = req.user._id;
    await language.save()
    auditFunc({
        admin: req.user._id,
        title: 'Add Language',
        description: `${language.name} created.`,
        ip: req.ip
    })
    res.status(201).send({ message: "Language saved successfully." });
});

// Language List role(0)
router.get('/', [auth, admin], async (req, res) => {
    //console.log("test");
    let pageIndex = parseInt(req.query.pageIndex);
    let pageSize = parseInt(req.query.pageSize);
    let sort = req.query.sort;
    const count = await Language.countDocuments({ softDelete: '0' });
    const language = await Language.find({ softDelete: '0' })
        .skip((pageIndex - 1) * pageSize)
        .limit(pageSize)
        .sort(sort).select("name code description ");
    var NewLanguage = []
    for (var i = 0; i < language.length; i++) {
        var NewLanguageObj = {}
        NewLanguageObj["_id"] = language[i]._id;
        NewLanguageObj["name"] = language[i].name;
        NewLanguageObj["code"] = language[i].code;
        NewLanguageObj["description"] = entities.decode(language[i].description);
        NewLanguage.push(NewLanguageObj)
    }
    res.status(200).send({ data: NewLanguage, count: count, message: 'Get language successfully.' });
})

// Language List App
router.get('/list', async (req, res) => {
    //console.log("vxcvxc");
    const language = await Language.find({ isActive: '1', softDelete: '0' }).select("name code description")
    var NewLanguage = []
    for (var i = 0; i < language.length; i++) {
        var NewLanguageObj = {}
        NewLanguageObj["_id"] = language[i]._id;
        NewLanguageObj["name"] = language[i].name;
        NewLanguageObj["code"] = language[i].code;
        NewLanguageObj["description"] = entities.decode(language[i].description);
        NewLanguage.push(NewLanguageObj)
    }
    res.status(200).send({ data: NewLanguage,  message: 'Get language successfully.' });
})

// Language Details
router.get('/:id', [auth, admin,], async (req, res) => {
    const language = await Language.findById(req.params.id).select("-__v -isActive -_id");
    if (!language) return res.status(404).send({ message: "Language with following id not found" });
    language.description = entities.decode(language.description)
    res.status(200).send({ data: language, message: 'Get language successfully.' });
})

// Update a Language
router.put('/:id', [auth, admin, role(2)], async (req, res) => {
    const { error } = validateUpdate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
    var NewBody = req.body;
    NewBody.description = entities.encode(req.body.description)
    let obj = _.pick(NewBody, ['name', 'code', 'description'])
    obj.modifiedBy = req.user._id;
    const language = await Language.findByIdAndUpdate(
        req.params.id,
        obj,
        { new: true }
    ).select('name,code,description')

    if (!language)
        return res.status(404).send({ message: "Language with following id not found !" });
    auditFunc({
        admin: req.user._id,
        title: 'Update Language',
        description: `${obj.name} updated`,
        ip: req.ip
    })
    res.status(201).send({ message: "Language update successfully." });
});



module.exports = router;