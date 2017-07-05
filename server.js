var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Superhero = require('./models/Superhero')
var app = express();
var port = 3000;

mongoose.connect('mongodb://localhost/superhero');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
  res.send("Hello");
});

app.post('/', function(req,res){
  var superhero = new Superhero();
  superhero.name = req.body.name;
  superhero.superPower = req.body.superPower;

  superhero.save(function(superhero, err){
    res.send(superhero);
  }, function(err){
    res.send(err);
  })

})

var server = app.listen(port, function(){
  console.log("Listening on port", port);
});
