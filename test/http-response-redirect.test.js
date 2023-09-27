import express from 'express';
import request from 'supertest';

const app = express();

app.get('/', (req, res) => {
    res.redirect('/login');
});

test('Unit Test Response Redirect', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(302);
    expect(response.get('location')).toBe('/login');
});