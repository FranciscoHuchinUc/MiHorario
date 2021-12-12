const { json } = require('express');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express(json));

app.use('/', require('./router'));
app.use(express.static('public'));


app.listen( 5000, () => {
    console.log('SERVER CORRIENDO EN http://localhost:5000');
})