var express = require('express');
var Router = express.Router();
var Superhero = require('../models/Superhero');

Router.route('/').get(function(req,res){
  Superhero.find(function(err, superheroes){
    if(err){
      res.send("Error");
    } else {
      res.json({data: superheroes});
    }
  })
}).post(function(req,res){
  console.log("in the post route");
  var superhero = new Superhero();
  superhero.name = req.body.name;
  superhero.superPower = req.body.superPower;
  superhero.img = req.body.img;

  superhero.save().then(function(superhero){
    res.json({message: "Hero created", data: superhero});
  }, function(err){
    res.send(err);
  })
})

Router.route('/:_id').get(function(req,res){
  Superhero.findById(req.params._id, function(err, superhero) {
    console.log("found superhero", superhero);
    res.send("Found superhero");
  })
})

module.exports = Router;
