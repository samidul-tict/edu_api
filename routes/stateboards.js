const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { Stateboard, validate, validateUpdate } = require('../models/stateboard');
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
const auth = require('../middeware/auth');
const { auditFunc } = require('../models/audit');
const admin = require('../middeware/admin');
const role = require('../middeware/role');

// Add Stateboard role(1)
router.post('/add', [auth, admin, ], async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    let stateboard = await Stateboard.findOne({ name: req.body.name });
    if (stateboard) return res.status(409).send({ message: "Stateboard already Exist." });
    var NewBody = req.body;
    NewBody.description = entities.encode(req.body.description)
    stateboard = new Stateboard(_.pick(NewBody, ['name', 'code', 'description']));
    stateboard.createdBy = req.user._id;
    await stateboard.save()
    auditFunc({
        admin: req.user._id,
        title: 'Add Stateboard',
        description: `${stateboard.name} created.`,
        ip: req.ip
    })
    res.send({ message: "Stateboard saved successfully." });
});

// Stateboard List role(0)
router.get('/', [auth, admin, ], async (req, res) => {
    let pageIndex = parseInt(req.query.pageIndex);
    let pageSize = parseInt(req.query.pageSize);
    let sort = req.query.sort;
    const count = await Stateboard.countDocuments({ softDelete: '0' });
    const stateboard = await Stateboard.find({ softDelete: '0' })
        .skip((pageIndex - 1) * pageSize)
        .limit(pageSize)
        .sort(sort).select("name code description ");
    var NewStateboard = []
    for (var i = 0; i < stateboard.length; i++) {
        var NewStateboardObj = {}
        NewStateboardObj["_id"] = stateboard[i]._id;
        NewStateboardObj["name"] = stateboard[i].name;
        NewStateboardObj["code"] = stateboard[i].code;
        NewStateboardObj["description"] = entities.decode(stateboard[i].description);
        NewStateboard.push(NewStateboardObj)
    }
    res.status(200).send({ data: NewStateboard, count: count, message: 'Get Stateboard successfully.' });
})

// Stateboard List App
router.get('/list', async (req, res) => {
    const stateboard = await Stateboard.find({ isActive: '1', softDelete: '0' })
        .select("name code description")
    var NewStateboard = []
    for (var i = 0; i < stateboard.length; i++) {
        var NewStateboardObj = {}
        NewStateboardObj["_id"] = stateboard[i]._id;
        NewStateboardObj["name"] = stateboard[i].name;
        NewStateboardObj["code"] = stateboard[i].code;
        NewStateboardObj["description"] = entities.decode(stateboard[i].description);
        NewStateboard.push(NewStateboardObj)
    }
    res.status(200).send({ data: NewStateboard, message: 'Get Stateboard successfully.' });
})

// Stateboard Details
router.get('/:id', [auth, admin, role(0)], async (req, res) => {
    const stateboard = await Stateboard.findById(req.params.id).select("-__v -isActive -_id");
    if (!stateboard) return res.status(404).send({ message: "Stateboard with following id not found" });
    stateboard.description = entities.decode(stateboard.description)
    res.status(200).send({ data: stateboard, message: 'Get Stateboard successfully.' });
})

// Update a Stateboard
router.put('/:id', [auth, admin, role(2)], async (req, res) => {
    const { error } = validateUpdate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
    var NewBody = req.body;
    NewBody.description = entities.encode(req.body.description)
    let obj = _.pick(NewBody, ['name', 'code', 'description'])
    obj.modifiedBy = req.user._id;
    const stateboard = await Stateboard.findByIdAndUpdate(
        req.params.id,
        obj,
        { new: true }
    ).select('name,code,description')

    if (!stateboard)
        return res.status(404).send({ message: "Stateboard with following id not found !" });
    auditFunc({
        admin: req.user._id,
        title: 'Update Stateboard',
        description: `${obj.name} updated`,
        ip: req.ip
    })
    res.send({ message: "Stateboard update uuccessfully." });
});


module.exports = router;