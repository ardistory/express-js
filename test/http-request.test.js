import express from 'express';
import request from 'supertest';


test('request test', async () => {
    const app = express();
    app.get('/', (req, res) => {
        res.send(`Hallo ${req.query.name}`);
    });

    const requestQuery = await request(app).get('/').query({ name: "ardi" })
    expect(requestQuery.text).toBe('Hallo ardi');
});
