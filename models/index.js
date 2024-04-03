const { connectToDB, mongoose } = require('./connection');
const { Note } = require('./notes');

module.exports = {
    connectToDB, mongoose, Note
};
