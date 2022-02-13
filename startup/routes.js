const error = require("../middeware/error");
const bodyParser = require('body-parser');
const express = require("express");
const requestIp = require('request-ip');
const path = require('path');
const admin = require("../routes/admin");
const language = require("../routes/languages");
const institute = require("../routes/institutes");
const standard = require("../routes/standards");
const stateboard = require("../routes/stateboards");
const student = require("../routes/students");
const subject = require("../routes/subjects");
const chapter = require("../routes/chapters");
const content = require("../routes/contents");

module.exports = function(app) {

    app.use(function(req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Expose-Headers", "Authorization");
        res.setHeader(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization, BSRF"
        );
        res.setHeader(
            "Access-Control-Allow-Methods",
            "POST, GET, PUT, PATCH, DELETE, OPTIONS"
        );
        res.setHeader("Cache-Control", "no-cache");
        next();
    });

    app.use(function(req, res, next) {
        req.ip = requestIp.getClientIp(req);
        next();
    });

    // app.use(express.static("uploads"));
    app.use(express.static(path.join(__dirname, '../', 'uploads')));
    app.use(express.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.use(express.urlencoded({ extended: true, limit: '50mb' }));

    app.use("/api/healthcheck", (req, res) => res.sendStatus(200));
    app.use("/api/users", admin);
    app.use("/api/languages", language);
    app.use("/api/institutes", institute);
    app.use("/api/standards", standard);
    app.use("/api/stateboards", stateboard);
    app.use("/api/students", student);
    app.use("/api/subjects", subject);
    app.use("/api/chapters", chapter);
    app.use("/api/contents", content);
    app.use((req, res) => {
        res.json("You're lost, check your route !");
    })
    app.use(error); 
}