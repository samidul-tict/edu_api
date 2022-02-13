const winston = require('winston');
const express = require("express");
const app = new express();
// const cluster = require('cluster');
// const clusterWorkerSize = require('os').cpus().length;
const process = require('process');

require('./startup/prod')(app);
require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => winston.info(`Listening to port ${PORT} at ${new Date()}`));
module.exports = server;

// if (clusterWorkerSize > 1) {
//     if (cluster.isMaster) {
//         for (let i = 0; i < clusterWorkerSize; i++) {
//             cluster.fork()
//         }

//         cluster.on("exit", function (worker) {
//             console.log("Worker", worker.id, " has exitted.")
//         })

//     } else {
//         const app = express()

//         app.listen(PORT, function () {
//             console.log(`Express server listening on port ${PORT} and worker ${process.pid}`)
//         })
//     }
// } else {
//     const app = express()

//     app.listen(PORT, function () {
//         console.log(`Express server listening on port ${PORT} with the single worker ${process.pid}`)
//     })
// }