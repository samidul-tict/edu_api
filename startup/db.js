const mongoose = require("mongoose");
const winston = require("winston");
const { db } = require("../constants/connection")

// Conneting to mongodb
module.exports = function () {
    mongoose
        .connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        .then(() => winston.info(`Connected to database`));
}