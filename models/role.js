const mongoose = require('mongoose');
const Joi = require('joi');
const pattern = "^[a-zA-Z\s]+$";

const permissionSchema = new mongoose.Schema({
    menuId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Menu'
    },
    permission: {
        type: [Number],
        required: true
    }
});

const roleSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    menu: {
        type: [permissionSchema],
        required: true
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

function validateRole(admin) {
    let menuItems = Joi.object().keys({
        menuId: Joi.string().required(),
        view: Joi.boolean().required(),
        add: Joi.boolean().required(),
        edit: Joi.boolean().required(),
        delete: Joi.boolean().required(),
    })

    const schema = {
        name: Joi.string()
            .regex(RegExp(pattern)) // you have to put it in this way and it will work :)
            .required()
            .error(() => {
                return {
                    message: 'Invalid Name,',
                };
            }),
        menu: Joi.array().items(menuItems)
    }

    return Joi.validate(admin, schema);
}

const Role = mongoose.model('Role', roleSchema);

exports.Role = Role;
exports.validateRole = validateRole;