// Using & Config
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { raw } = require('express');
const app = express();
app.listen(1337);
app.set('view engine', 'ejs');
app.use(cors())

// Teams API
axios.get('http://brew-roster-svc.us-e2.cloudhub.io/api/teams', {headers: {'api-key': '0ca80ddc-63f6-476e-b548-e5fb0934fc4b'},})
.then(result =>{    
    MLBteams = result.data;
    console.log(typeof MLBteams);
})
.catch(error => {
    console.log(error);
});

//routing
app.get('/', function (req, res) {    
    res.render('index', { MLBteams : MLBteams });
})
app.get('/about', function (req, res) {
    res.render('about');
})