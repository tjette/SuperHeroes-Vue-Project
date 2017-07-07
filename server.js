var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Superhero = require('./models/Superhero')
var app = express();
var port = 3000;

mongoose.connect('mongodb://localhost/superheroes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.get('/api/heroes/', function(req,res){
  Superhero.find(function(err, superheroes){
    if (err) {
      res.send(err);
    } else {
      res.json({data: superheroes, message: "heroes succesfully received"});
    }
  })
});
//params allows you to grab a unique id to find a specific document
app.get("/api/heroes/:_id", function(req,res){
  Superhero.findById(req.params._id, function(err, superhero){
    if (err) {
      res.send(err);
    } else {
      res.json({data: superhero, message: "Hero retrieved!"});
    }
  });
});

app.post('/api/heroes/', function(req, res) {
  console.log("Hitting post route");
  var superhero = new Superhero();
  superhero.name = req.body.name;
  superhero.superPower = req.body.superPower;
  superhero.img = req.body.img;

  superhero.save().then(function(superhero) {
    res.json({message: "hero succesfully created", data: superhero});
  }, function(err) {
    res.send("Failed to save :( ")
  })
});

app.delete('/api/heroes/:_id', function(req,res){
  Superhero.remove({_id: req.params._id }, function(err){
    if(err){
      res.send("Error", err)
    } else {
      res.send("Superhero deleted");
    }
  })
})

var server = app.listen(port, function(){
  console.log("Listening on port", port);
});
