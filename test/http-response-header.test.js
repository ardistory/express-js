import express from 'express';
import request from 'supertest';

const app = express();

app.get('/', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.set({
        "X-Author": "Ardi Putra"
    });
    res.send({ password: 123 });
});

test("Unit Test Response Header", async () => {
    const response = await request(app).get('/');
    expect(JSON.parse(response.text)).toEqual({ password: 123 });
    expect(response.get('X-Author')).toBe('Ardi Putra');
});