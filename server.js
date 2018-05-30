var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var options = null;

//mongo connect string
//mongodb+srv://mongoUsr:<PASSWORD>@cluster0-ox48g.mongodb.net/test?retryWrites=true
//MongoDB connect
mongoose.connect('mongodb+srv://mongoUsr:w11tvh226@cluster0-ox48g.mongodb.net/test?retryWrites=true');

var uri = 'mongodb+srv://mongoUsr:w11tvh226@cluster0-ox48g.mongodb.net/test?retryWrites=true';
mongoose.connect(uri, options).then(
    () => { console.log('connected'); },
    err => { console.log('error'); }
  );

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api',require('./routes/api'));



app.listen(3000,'0.0.0.0');
console.log('Listening on por 3000');