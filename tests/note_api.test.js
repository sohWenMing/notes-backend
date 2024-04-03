const { test, after, describe } = require('node:test');
const assert = require('node:assert');
const mongoose = require('mongoose');
const supertest = require('supertest');
const { app } = require('../app');

const api = supertest(app);

describe('a suite of tests', () => {
    test('note are returned as json', async() => {
        await api.get('/api/notes').expect(200).expect('Content-Type', /application\/json/);
    });

    test('there are two notes', async() => {
        const response = await api.get('/api/notes');
        assert.deepStrictEqual(response.body.length, 2);
    });

    test('there is a note about HTTP methods', async() => {
        const response = await api.get('/api/notes');
        const contents = response.body.map((element) => {
            return element.content;
        });
        console.log('contents: ', contents);
        assert.deepStrictEqual(contents.includes('HTML is easy'), true);
    });
    after(async () => {
        await mongoose.connection.close();
        console.log('DB connection closed');
    });
});


