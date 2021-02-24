const express = require('express');
const app = express();

app.get('/hello%20a', (req, res, next) => {
    res.send('Welcome to This')
});

app.use((req, res, next) => {
    res.status(200).send({
        mensage: 'OK, Deu certo'
    });
});

module.exports = app;