import express from 'express';

const app = express();


app.get('/data/api', (req, res) => {
    if (req.query.key === 'x123_key') {
        res.json({
            status: 200,
            message: "selamat datang!",
            dataApi: {
                nama: "Ardi Putra",
                alamat: {
                    jalan: "jl. belum ada",
                    provinsi: "Banten",
                    negara: "Indonesia"
                }
            }
        });
    }
    res.send({ response: "key salah!" });
});

app.listen(3000);