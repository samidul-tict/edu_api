const helmet = require("helmet");
const compression = require("compression");

const shouldCompress = (req, res) => {
    if (req.headers['x-no-compression']) {
        // Will not compress responses, if this header is present
        return false;
    }
    // Resort to standard compression
    return compression.filter(req, res);
}

module.exports = function (app) {
    app.use(helmet());
    app.use(compression({
        filter: shouldCompress,
        threshold: 0
    }
    ));
}
