const { mongoose } = require('./connection');

const noteSchema = new mongoose.Schema({
    'content': {
        type: String,
        required: true
    },
    'important': {
        type: Boolean,
        required: true
    }
});

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = document._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = {
    Note
};



