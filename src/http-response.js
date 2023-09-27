import express from 'express';

const app = express();
const { dataRahasia } = { dataRahasia: `${Math.ceil(Math.random() * 12345678)}` };

app.get('/', (req, res) => {
    res.json({
        message: "Selamat datang!"
    });
});

app.get('/data', (req, res) => {
    if (req.query.key === 'ardi123') {
        res.json({
            nama: "Ardi",
            negara: "Indonesia",
            dataRahasia: `${dataRahasia}`
        });
    }
    res.json({
        status: 404,
        response: "Api key salah!"
    });
});

app.listen(3000, () => {
    console.log('Server Started On Port : 3000');
});