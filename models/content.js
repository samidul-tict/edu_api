const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');
const mongoose = require('mongoose');
const pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$";

const contentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },
    subccontentname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    subjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    },
    chapterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter'
    },
    contentfile: {
        type: String,
        default: 'noimg.jpg'
    },
    contentvideo: {
        type: String,
        default: ''
    },
    fileType: {
        type: String,
        enum: ['P', 'V']
    },
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


const Content = mongoose.model('Content', contentSchema);

function validateCreate(content) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        subccontentname: Joi.string().min(5).max(50).required(),
        fileType: Joi.string().valid('P', 'V'),
        description: Joi.string().min(5).max(255),
        subjectId: Joi.string().required(),
        chapterId: Joi.string().required(),
        contentfile: Joi.string(),
        contentvideo: Joi.string().allow(null),
    }
    return Joi.validate(content, schema);
}

function validateUpdate(content) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        subccontentname: Joi.string().min(5).max(50).required(),
        fileType: Joi.string().valid('P', 'V'),
        contentType: Joi.string().min(5).max(50).required(),
        description: Joi.string().min(5).max(255),
        subjectId: Joi.string().required(),
        chapterId: Joi.string().required(),
        contentfile: Joi.string(),
        contentvideo: Joi.string().allow(null),
    }
    return Joi.validate(content, schema);
}

exports.Content = Content;
exports.validate = validateCreate;
exports.validateUpdate = validateUpdate;