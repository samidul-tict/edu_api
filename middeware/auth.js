const jwt = require('jsonwebtoken');
const config = require('config');
const CryptoJS = require('crypto-js');
var tokenFromUI = "ZPq44zWOdgpslBj7lLzZYA==";

function auth(req, res, next) {
    if (!req.header('Authorization') || req.header('Authorization') == 'undefined')
        return res.status(401).send({ message: "Access denied. No token provided" });

    const token = req.header('Authorization').split(' ')[1];

    if (!token) return res.status(401).send({ message: 'Access denied. No token provided' });

    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decoded;

        if (req.user.status !== "1") return res.status(401).send({ message: "Account Inactive, Contact Support !" })

        // Check For CSRF
        // if (!checkCsrf(req)) return res.status(401).send({ message: "CSRF Validation Failed" })
        next();
    } catch (ex) {
        res.status(401).send({ message: 'Invalid token.' })
    }
}

// Check CSRF
function checkCsrf(req) {
    // CSRf Logic
    let encrypted = req.header('BSRF');
    if (encrypted) {
        let decrypt = parseInt(decryptUsingAES256(encrypted));
        let currentTime = new Date().getTime();
        if (currentTime - decrypt < 30 * 1000) return true
        else return false
    }
}

// Decrypt CSRF Token
function decryptUsingAES256(encrypted) {
    let _key = CryptoJS.enc.Utf8.parse(tokenFromUI);
    let _iv = CryptoJS.enc.Utf8.parse(tokenFromUI);

    let decrypted = CryptoJS.AES.decrypt(encrypted, _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
    return decrypted
}

module.exports = auth;