const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');
const mongoose = require('mongoose');
const pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$";

const stateboardSchema = new mongoose.Schema({
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


const Stateboard = mongoose.model('Stateboard', stateboardSchema);

function validateCreate(stateboard) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        code: Joi.string().min(2).max(50).required(),
        description: Joi.string().min(5).max(255).required()
    }
    return Joi.validate(stateboard, schema);
}

function validateUpdate(stateboard) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        code: Joi.string().min(5).max(50).required(),
        description: Joi.string().min(5).max(255).required()
    }
    return Joi.validate(stateboard, schema);
}

exports.Stateboard = Stateboard;
exports.validate = validateCreate;
exports.validateUpdate = validateUpdate;