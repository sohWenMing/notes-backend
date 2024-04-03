const { errorLogger } = require('./logger');

function errorHandler(err, req, res, next) {
    console.log('error handler ran');
    errorLogger(err);
    res.status(400).send(err.message);
}

module.exports = { errorHandler };