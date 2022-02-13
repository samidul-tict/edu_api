const winston = require('winston');

const moment = require('moment');
require("express-async-errors");
require('winston-mongodb');
// const config = require("config");

module.exports = function () {

    // process.on("uncaughtException", (ex) => {
    //     winston.error(ex.message, ex);
    //     process.exit(1);
    // });

    // Have To Reset Running Match To False to restart it on server restart
    process.on("uncaughtException", (ex) => {
        //stopMatches();
    });

    winston.exceptions.handle(new winston.transports.File({ filename: 'uncaughtExceptions.log' }));
    winston.exceptions.handle(new winston.transports.Console());

    process.on("unhandledRejection", (ex) => {
        // stopMatches();
        throw (ex);
    });

    const files = new winston.transports.File({ filename: "logfile.log" });
    const myconsole = new winston.transports.Console();
    winston.add(myconsole);
    winston.add(files);
    /* const db = config.get('db');
    winston.add(
        new winston.transports.MongoDB({
            db: db,
            level: "info",
            options: {
                useUnifiedTopology: true,
            },
        })
    ); */
}

// async function stopMatches() {
//     let minus10min = moment().subtract(10, 'minutes');
//     let matches = await Match.find({ softDelete: '0', isActive: '1', endTime: { $gt: new Date(minus10min) }, running: true });
//     matches.forEach(async match => {
//         match.running = false;
//         await match.save();
//     })
//     console.log('Uncaught Exception Occured All Running Matches Stopped');
// }