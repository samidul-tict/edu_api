const bcrypt = require('bcrypt');
const _ = require('lodash');
const express = require('express');
const router = express.Router();
const { Admin, validateAdmin, validateUpdate, validatePassword } = require('../models/admin');
const { Role } = require('../models/role');
const Joi = require('joi');
const auth = require('../middeware/auth');
const admin = require('../middeware/admin');
const { auditFunc } = require('../models/audit');
const role = require('../middeware/role');
const axios = require('axios');


// Get Current Admin
router.get('/profile', auth, async (req, res) => {
  const admin = await Admin.findById(req.user._id).select('name email phone -_id');
  res.send(admin);
})

// Register an Admin [auth, admin, role(1)],
router.post('/register', [auth, admin, role(1)], async (req, res) => {
  const { error } = validateAdmin(req.body.user);
  if (error) return res.status(400).send({ status:400,data:[],message: error.details[0].message });

  let admin = await Admin.findOne({ email: req.body.user.email });
  if (admin) return res.send({ "status":409,"data":[],"message": "Admin already registered." });

  admin = new Admin(_.pick(req.body.user, ['name', 'email', 'password', 'phone']));
  // hashing password
  const salt = await bcrypt.genSalt(10);
  admin.password = await bcrypt.hash(admin.password, salt);
  let newAdmin = await admin.save()

  res.send({ status:200,data:newAdmin,message: 'Record Added Successfully' });
});

// Get admin by id
router.get('/user/:id', [auth, admin, role(0)], async (req, res) => {
  const admin = await Admin.findById(req.params.id).select('name email phone role -_id');
  res.send(admin);
})

// update admin by id
router.put('/:id', [auth, admin, role(2)], async (req, res) => {
  const { error } = validateUpdate(req.body.user);
  if (error) return res.status(400).send({ message: error.details[0].message });

  let obj = _.pick(req.body.user, ['name', 'phone', 'role'])

  const admin = await Admin.findByIdAndUpdate(
    req.params.id,
    obj
  )

  if (!admin)
    return res.status(404).send({ message: "The admin with following id not found !" });

  auditFunc({
    admin: req.user._id,
    title: 'Admin Updated',
    description: `${req.body.user.name} updated.`,
    ip: req.ip
  })

  res.send({ message: "Record Updated Successfully" });
});

// Update current Admin
router.put('/', [auth, admin, role(2)], async (req, res) => {
  const { error } = validateUpdate(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  let obj = _.pick(req.body, ['name', 'phone', 'role'])

  const admin = await Admin.findByIdAndUpdate(
    req.user._id,
    obj
  )

  if (!admin)
    return res.status(404).send({ message: "The admin with following id not found !" });

  res.send({ message: "Record Updated Successfully" });
});

// Change current admin's password
router.put('/change-password', [auth, admin, role(2)], async (req, res) => {
  const { error } = validatePassword(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  let admin = await Admin.findById(req.user._id);

  const validPassword = await bcrypt.compare(req.body.old_password, admin.password);
  if (!validPassword) return res.status(400).send({ message: "Invalid password." });
  const salt = await bcrypt.genSalt(10);

  admin.password = await bcrypt.hash(req.body.new_password, salt);
  admin.save();
  res.send({ message: "Password Updated Successfully" });
});

// Authenticate an admin (login)
router.post('/auth', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const admin = await Admin.findOne({ email: req.body.email })
  if (!admin) return res.status(400).send({ message: "Invalid email or password." });

  const validPassword = await bcrypt.compare(req.body.password, admin.password);
  if (!validPassword) return res.status(400).send({ message: "Invalid email or password." });

  // const userRole = await Role.findById(admin.role).populate('menu.menuId', 'title url icon category priority -_id')
  // .select('name menu -_id');

  // let role = userRole.menu.filter(a => {
  //   if (a.permission[0]) return a;
  // }).map(a => {
  //   return {
  //     title: a.menuId.title,
  //     url: a.menuId.url,
  //     category: a.menuId.category,
  //     icon: a.menuId.icon,
  //     priority: a.menuId.priority,
  //     permission: a.permission,
  //   }
  // }).sort((a, b) => a.priority - b.priority);   // Sort By Priority

  const token = admin.generateAuthToken(role);
  res.header('Authorization', token).send({ message: "Login Successful" });
});

// Get Admin List
router.get('/', [auth, admin, role(0)], async (req, res) => {
  let pageIndex = parseInt(req.query.pageIndex);
  let pageSize = parseInt(req.query.pageSize);
  let sort = req.query.sort;
  const count = await Admin.countDocuments({ softDelete: '0' });
  const userList = await Admin.find({ softDelete: '0' })
    .skip((pageIndex - 1) * pageSize)
    .limit(pageSize)
    .sort(sort)
    .populate('role', 'name -_id')
    .select("name email phone isActive createdDate")

  res.send({ userList: userList, count: count });
});

// Update Status of (Admin)
router.put('/update-status/:id', [auth, admin, role(2)], async (req, res) => {

  const admin = await Admin.findById(req.params.id,)

  if (!admin)
    return res.status(404).send({ message: "Admin with following id not found !" });

  admin.isActive = admin.isActive === "1" ? "0" : "1";
  admin.save();

  auditFunc({
    admin: req.user._id,
    title: 'Admin Status Changed',
    description: `Status of ${admin.name} changed to  ${admin.isActive}`,
    ip: req.ip
  })

  res.send({ message: "Admin Status Successfully Updated" });
});

// Delete an admin (Admin)
router.delete('/:id', [auth, admin, role(3)], async (req, res) => {

  const admin = await Admin.findById(req.params.id)

  if (!admin)
    return res.status(404).send({ message: "Admin with following id not found !" });

  admin.softDelete = '1';
  admin.save();

  auditFunc({
    admin: req.user._id,
    title: 'Admin Deleted',
    description: `${admin.name} deleted.`,
    ip: req.ip
  })

  res.send({ message: "Admin Deleted Successfully" });
});

router.get('/check-email', [auth, admin, role(0)], async (req, res) => {

  let email = req.query.email;
  if (email) {
    const admin = await Admin.countDocuments({ email: email, softDelete: '0' })

    if (!admin)
      return res.send({ message: "" });

    res.send({ message: "Email Unavailable" });
  } else {
    res.send({ message: "Invalid Email" })
  }
});





function validate(req) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  }

  return Joi.validate(req, schema);
}

module.exports = router;