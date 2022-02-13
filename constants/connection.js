const config = require('config');

// exports.db = `mongodb+srv://${config.get('dbUser')}:${config.get('dbPass')}@derby.ebcyx.mongodb.net/derby11`;
exports.db = `mongodb+srv://${config.get('dbUser')}:${config.get('dbPass')}@cluster0.irzgn.mongodb.net/eduwati`;