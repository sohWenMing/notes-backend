const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({
    'path': path.resolve(__dirname, '../.env')
});

const PASSWORD = process.env.PASSWORD;

const URL = `mongodb+srv://nindgabeet:${PASSWORD}@cluster0.hb7m3ac.mongodb.net/notesApp?retryWrites=true&w=majority`;

async function connectToDB() {
    try {
        await mongoose.connect(URL);
        console.log('connected to MongoDB');
    }
    catch(error) {
        console.log(error);
        console.log('error connecting to DB');
        process.exit(1);
    }
}

module.exports = {
    connectToDB, mongoose
};
