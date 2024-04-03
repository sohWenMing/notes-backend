const { Note, mongoose } = require('./models/index');
const url = process.env.TEST_MONGODB_URI;

const content = process.argv[2];
const important = Math.random() < 0.5;

const note = new Note({
    content: content,
    important: important
});

console.log(note);

async function connectToDB(url) {
    try {
    await mongoose.connect(url);
    console.log('connected to DB');
    }
    catch(error) {
        console.error(error);
    }
}

async function saveNote(note) {
    try {
    await connectToDB(url);
    note.save().then((res) => {
        console.log(res);
        mongoose.connection.close();
    });
    }
    catch(error) {
        console.error(error);
    }
}

saveNote(note);

