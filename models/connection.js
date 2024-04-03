const mongoose = require('mongoose');
const { MONGODB_URI } = require('../utils/config');

async function connectToDB() {
    try {
        await mongoose.connect(MONGODB_URI);
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
