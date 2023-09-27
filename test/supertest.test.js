import request from "supertest";
import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

test("Supertest", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe('Hello World!');
});