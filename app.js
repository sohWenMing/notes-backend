const express = require('express');
const app = express();
const { connectToDB } = require('./models/index');
const { notesRouter } = require('./controllers/index');
const { requestLogger } = require('./utils/logger');

app.use(express.json());

app.use(requestLogger);

app.use('/api/notes', notesRouter);

connectToDB();

module.exports = {
    app
};