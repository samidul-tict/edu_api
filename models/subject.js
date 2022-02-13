const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');
const mongoose = require('mongoose');
const pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$";

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        unique: true
    },
    code: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        unique: true
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    stateboardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stateboard'
    },
    standardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Standard'
    },
    image: {
        type: String,
        default: 'noimg.jpg'
    },
    points: Number,
    createdDate: { type: Date, default: Date.now },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },
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


const Subject = mongoose.model('Subject', subjectSchema);

function validateCreate(subject) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        code: Joi.string().min(2).max(50).required(),
        description: Joi.string().min(5).max(255).required(),
        stateboardId: Joi.string().required(),
        standardId: Joi.string().required(),
        image: Joi.string(),
        points: Joi.number().required(),
    }
    return Joi.validate(subject, schema);
}

function validateUpdate(subject) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        code: Joi.string().min(5).max(50).required(),
        description: Joi.string().min(5).max(255).required(),
        description: Joi.string().min(5).max(255).required(),
        stateboardId: Joi.string().required(),
        image: Joi.string(),
        points: Joi.number().required(),
    }
    return Joi.validate(subject, schema);
}

exports.Subject = Subject;
exports.validate = validateCreate;
exports.validateUpdate = validateUpdate;