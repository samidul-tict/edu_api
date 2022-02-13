const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');
const mongoose = require('mongoose');
const pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$";

const chapterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    subchaptername: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        unique: true
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
    image: {
        type: String,
        default: 'noimg.jpg'
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


const Chapter = mongoose.model('Chapter', chapterSchema);

function validateCreate(chapter) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        subchaptername: Joi.string().min(5).max(50).required(),
        description: Joi.string().min(5).max(255).required(),
        subjectId: Joi.string().required(),
        image: Joi.string(),
    }
    return Joi.validate(chapter, schema);
}

function validateUpdate(chapter) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        description: Joi.string().min(5).max(255).required(),
        subjectId: Joi.string().required(),
        image: Joi.string(),
    }
    return Joi.validate(chapter, schema);
}

exports.Chapter = Chapter;
exports.validate = validateCreate;
exports.validateUpdate = validateUpdate;