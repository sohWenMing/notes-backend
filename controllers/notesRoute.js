const express = require('express');
const notesRouter = express.Router();
const { Note } = require('../models/index');

notesRouter.get('/', async(req, res, next) => {
    const response = await Note.find({});
    res.status(200).json(response);
});

notesRouter.get('/testPost', async(req, res, next) => {
    try {
        const testError = new Error('this is a test error');
        testError.name = 'test error';
        throw testError;
    }
    catch(error) {
        next(error);
    }
});
module.exports = {
    notesRouter
};



