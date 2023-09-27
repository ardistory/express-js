import express from 'express';
import request from 'supertest';

const app = express();
app.get('/', (req, res) => {
    res.send(`Hello ${req.query.firstname} ${req.query.lastname}`);
});

test("Unit Test Request Query Parameter", async () => {
    const response = await request(app)
        .get('/')
        .query({ firstname: "Ardi", lastname: "Putra" });
    expect(response.text).toBe('Hello Ardi Putra');
});
