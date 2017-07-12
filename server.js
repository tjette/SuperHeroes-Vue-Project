var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var heroRoutes = require('./routes/superheroes');
var Superhero = require('./models/Superhero')
var app = express();
var port = 3000;

mongoose.connect('mongodb://localhost/superheroes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/heroes', heroRoutes);

app.use(express.static(__dirname + '/public'));

var server = app.listen(port, function(){
  console.log("Listening on port", port);
});
