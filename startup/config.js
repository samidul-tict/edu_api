const config = require("config");
const { Admin } = require("../models/admin");

module.exports = async function () {
    if (!config.get("jwtPrivateKey")) {
        throw new Error("FATAL ERROR: jwt private key is not defined");
    }
}