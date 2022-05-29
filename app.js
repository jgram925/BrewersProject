// Using & Config
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { raw } = require('express');
const app = express();
app.listen(1337);
app.set('view engine', 'ejs');
app.use(cors())

//routing
app.get('/', (req, res) => {
    res.render('index');
})
app.get('/about', (req, res) => {
    res.render('about');
})