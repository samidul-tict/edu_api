const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { Standard, validate, validateUpdate } = require('../models/standard');
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
const auth = require('../middeware/auth');
const { auditFunc } = require('../models/audit');
const admin = require('../middeware/admin');
const role = require('../middeware/role');

// Add Standard role(1)
router.post('/add', [auth, admin, ], async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    let standard = await Standard.findOne({ name: req.body.name });
    if (standard) return res.status(409).send({ message: "Standard already Exist." });
    var NewBody = req.body;
    NewBody.description = entities.encode(req.body.description)
    standard = new Standard(_.pick(NewBody, ['name', 'description']));
    standard.createdBy = req.user._id;
    await standard.save()
    auditFunc({
        admin: req.user._id,
        title: 'Add Standard',
        description: `${standard.name} created.`,
        ip: req.ip
    })
    res.send({ message: "Standard saved successfully." });
});

// Standard List role(0)
router.get('/', [auth, admin, ], async (req, res) => {
    let pageIndex = parseInt(req.query.pageIndex);
    let pageSize = parseInt(req.query.pageSize);
    let sort = req.query.sort;
    const count = await Standard.countDocuments({ softDelete: '0' });
    const standard = await Standard.find({ softDelete: '0' })
        .skip((pageIndex - 1) * pageSize)
        .limit(pageSize)
        .sort(sort).select("name code description ");
    var NewStandard = []
    for (var i = 0; i < standard.length; i++) {
        var NewStandardObj = {}
        NewStandardObj["_id"] = standard[i]._id;
        NewStandardObj["name"] = standard[i].name;
        NewStandardObj["description"] = entities.decode(standard[i].description);
        NewStandard.push(NewStandardObj)
    }
    res.status(200).send({ data: NewStandard, count: count, message: 'Get Standard successfully.' });
})
 
// Standard List App
router.get('/list', async (req, res) => {
    const standard = await Standard.find({ isActive: '1', softDelete: '0' })
        .select("name code description")
    var NewStandard = []
    for (var i = 0; i < standard.length; i++) {
        var NewStandardObj = {}
        NewStandardObj["_id"] = standard[i]._id;
        NewStandardObj["name"] = standard[i].name;
        NewStandardObj["description"] = entities.decode(standard[i].description);
        NewStandard.push(NewStandardObj)
    }
    res.status(200).send({ data: NewStandard, message: 'Get Standard successfully.' });
})

// Standard Details
router.get('/:id', [auth, admin, role(0)], async (req, res) => {
    const standard = await Standard.findById(req.params.id).select("-__v -isActive -_id");
    if (!standard) return res.status(404).send({ message: "Standard with following id not found" });
    standard.description = entities.decode(standard.description)
    res.status(200).send({ data: standard, message: 'Get Standard successfully.' });
})

// Update a Standard
router.put('/:id', [auth, admin, role(2)], async (req, res) => {
    const { error } = validateUpdate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
    var NewBody = req.body;
    NewBody.description = entities.encode(req.body.description)
    let obj = _.pick(NewBody, ['name', 'description'])
    obj.modifiedBy = req.user._id;
    const standard = await Standard.findByIdAndUpdate(
        req.params.id,
        obj,
        { new: true }
    ).select('name,description')

    if (!standard)
        return res.status(404).send({ message: "Standard with following id not found !" });
    auditFunc({
        admin: req.user._id,
        title: 'Update Standard',
        description: `${obj.name} updated`,
        ip: req.ip
    })
    res.send({ message: "Standard update uuccessfully." });
});
  


module.exports = router;