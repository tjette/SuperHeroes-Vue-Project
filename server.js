var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var mainRoutes = require('./routes/main');
var heroRoutes = require('./routes/superheroes');
var Superhero = require('./models/Superhero')
var app = express();
var port = 3000;

mongoose.connect('mongodb://localhost/superheroes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use('/api/main', mainRoutes);
app.use('/api/heroes', heroRoutes);

app.use(express.static(__dirname + '/public'));


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
