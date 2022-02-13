const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { Institute, validate, validateUpdate } = require('../models/institute');
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
const auth = require('../middeware/auth');
const { auditFunc } = require('../models/audit');
const admin = require('../middeware/admin');
const role = require('../middeware/role');

// Add Institute role(1)
router.post('/add', [auth, admin, ], async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    let institute = await Institute.findOne({ name: req.body.name });
    if (institute) return res.status(409).send({ message: "Institute already Exist." });
    var NewBody = req.body;
    NewBody.description = entities.encode(req.body.description)
    institute = new Institute(_.pick(NewBody, ['name', 'description']));
    institute.createdBy = req.user._id;
    await institute.save()
    auditFunc({
        admin: req.user._id,
        title: 'Add Institute',
        description: `${institute.name} created.`,
        ip: req.ip
    })
    res.send({ message: "Institute saved successfully." });
});

// Institute List role(0)
router.get('/', [auth, admin, ], async (req, res) => {
    let pageIndex = parseInt(req.query.pageIndex);
    let pageSize = parseInt(req.query.pageSize);
    let sort = req.query.sort;
    const count = await Institute.countDocuments({ softDelete: '0' });
    const institute = await Institute.find({ softDelete: '0' })
        .skip((pageIndex - 1) * pageSize)
        .limit(pageSize)
        .sort(sort).select("name code description ");
    var NewInstitute = []
    for (var i = 0; i < institute.length; i++) {
        var NewInstituteObj = {}
        NewInstituteObj["_id"] = institute[i]._id;
        NewInstituteObj["name"] = institute[i].name;
        NewInstituteObj["description"] = entities.decode(institute[i].description);
        NewInstitute.push(NewInstituteObj)
    }
    res.status(200).send({ data: NewInstitute, count: count, message: 'Get institute successfully.' });
})

// Institute List App
router.get('/list', async (req, res) => {
    const institute = await Institute.find({ isActive: '1', softDelete: '0' })
        .select("name code description")
    var NewInstitute = []
    for (var i = 0; i < institute.length; i++) {
        var NewInstituteObj = {}
        NewInstituteObj["_id"] = institute[i]._id;
        NewInstituteObj["name"] = institute[i].name;
        NewInstituteObj["description"] = entities.decode(institute[i].description);
        NewInstitute.push(NewInstituteObj)
    }
    res.status(200).send({ data: NewInstitute, message: 'Get Institute successfully.' });
})

// Institute Details
router.get('/:id', [auth, admin, role(0)], async (req, res) => {
    const institute = await Institute.findById(req.params.id).select("-__v -isActive -_id");
    if (!institute) return res.status(404).send({ message: "Institute with following id not found" });
    institute.description = entities.decode(institute.description)
    res.status(200).send({ data: institute, message: 'Get institute successfully.' });
})

// Update a Institute
router.put('/:id', [auth, admin, role(2)], async (req, res) => {
    const { error } = validateUpdate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
    var NewBody = req.body;
    NewBody.description = entities.encode(req.body.description)
    let obj = _.pick(NewBody, ['name', 'description'])
    obj.modifiedBy = req.user._id;
    const institute = await Institute.findByIdAndUpdate(
        req.params.id,
        obj,
        { new: true }
    ).select('name,code,description')

    if (!institute)
        return res.status(404).send({ message: "Institute with following id not found !" });
    auditFunc({
        admin: req.user._id,
        title: 'Update Institute',
        description: `${obj.name} updated`,
        ip: req.ip
    })
    res.send({ message: "Institute update uuccessfully." });
});
  


module.exports = router;