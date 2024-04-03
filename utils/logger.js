const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint, errors } = format;
const path = require('path');

const consoleLogger = createLogger({
    level: 'info',
    format: format.cli(),
    transports: [new transports.Console()]
});

const combinedFileLogger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [
        new transports.File({
            filename: path.resolve(__dirname, '../logs/combined_log.log'),
        })
    ]
});

const errorFileLogger = createLogger({
    level: 'error',
    format: combine(
        timestamp(),
        prettyPrint(),
        errors({ stack: true })
    ),
    transports: [
        new transports.File({
            filename: path.resolve(__dirname, '../logs/error_logs.log')
        }),
        new transports.Console()
    ]
});


function requestLogger(req, res, next) {
    const message = {
        url: req.url,
        method: req.method,
        body: req.body
    };
    let bodyString = '';
    for(let key in message.body) {
        bodyString += `${key}: ${message.body[key]} `;
    }
    consoleLogger.info(
    `
    url: ${message.url} 
    method: ${message.method} 
    body: ${bodyString ? bodyString : 'no body recorded'}
    `);
    combinedFileLogger.info(message);
    next();
}

function errorLogger(err) {
    const message = {
        'Error Name: ': err.name,
        'Error Message: ': err.message,
        'Error Stack: ': err.stack
    };
    consoleLogger.error(
        `
        Error Details
        ---------------------------
        Error Name: ${err.name}
        Error Message: ${err.message}
        Error Stack: ${err.stack}
        -----------------------------`
    );
    errorFileLogger.error(message);
}



module.exports = { requestLogger, errorLogger };
