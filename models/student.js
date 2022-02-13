const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    gender: {
        type: String,
        enum: ['M', 'F', 'O'],
        uppercase: true,
        trim: true
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 255,
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10,
        unique: true
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 1024
    },
    image: {
        type: String,
        default: 'noimg.jpg'
    },
    otp: Number,
    isProfileComplete: {
        type: String,
        enum: ['0', '1'],
        default: '0'
    },
    languageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Language'
    },
    stateboardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stateboard'
    },
    standardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Standard'
    },
    instituteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institute'
    },
    createdDate: { type: Date, default: Date.now },
    modifiedDate: Date,
    modifiedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },
    isActive: {
        type: String,
        enum: ['0', '1'],
        default: '1'
    },
    softDelete: {
        type: String,
        enum: ['0', '1'],
        default: '0'
    }
})

studentSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
        _id: this._id,
        name: this.name,
        gender: this.gender,
        phone: this.phone,
        isProfileComplete: this.isProfileComplete,
        languageId: this.languageId,
        stateboardId: this.stateboardId,
        standardId: this.standardId,
        standardId: this.standardId,
        status: this.isActive
    }, config.get('jwtPrivateKey'));
    return token;
}

const Student = mongoose.model('Student', studentSchema);

function validateCreate(student) {
    const schema = {
        name: Joi.string().max(50),
        email: Joi.string().min(5).max(255).email(),
        phone: Joi.string().length(10).regex(/^[0-9]+$/).required(),
        password: Joi.string().min(5).max(255),
        gender: Joi.string().valid('M', 'F', 'O'),
        languageId: Joi.string().required(),
        standardId: Joi.string(),
        instituteId: Joi.string(),
    }

    return Joi.validate(student, schema);
}

function validateUpdate(student) {
    const schema = {
        name: Joi.string().max(50),
        gender: Joi.string().valid('M', 'F', 'O'),
        email: Joi.string().min(5).max(255).email(),
        password: Joi.string().min(5).max(255),
        image: Joi.string().allow(null),
        languageId: Joi.string(),
        stateboardId: Joi.string(),
        standardId: Joi.string(),
        instituteId: Joi.string(),
    }

    return Joi.validate(student, schema);
}

function validateObjectId(object) {
    return Joi.validate(object, { follow: Joi.number().required() });
}

exports.Student = Student;
exports.validate = validateCreate;
exports.validateUpdate = validateUpdate;
exports.validateId = validateObjectId;
