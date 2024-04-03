const express = require('express');
const app = express();
const { connectToDB } = require('./models/index');
const { notesRouter } = require('./controllers/index');
const { requestLogger } = require('./utils/logger');
const { errorHandler } = require('./utils/errorHandler');

app.use(express.json());

app.use(requestLogger);

app.use('/api/notes', notesRouter);

connectToDB();

app.use(errorHandler);

module.exports = {
    app
};