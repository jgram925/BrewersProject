// Using & Config
const express = require('express');
const app = express();
app.listen(1337);
app.set('view engine', 'ejs');

const apiKey = "0ca80ddc-63f6-476e-b548-e5fb0934fc4b";

//routing
app.get('/', (req, res) => {
    res.render('home', { apiKey : apiKey });
})

app.get('/:teamName/:team', (req, res) => {
    res.render('team', { apiKey : apiKey, teamInfo : req });
})

app.get('/:player', (req, res) => {
    res.render('player', { apiKey : apiKey, playerInfo : req });
})