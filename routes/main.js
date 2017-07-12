var express = require('express');
var Router = express.Router();

Router.route('/', function(req,res){
  res.json({message: "I'm from Main"})
});

module.exports = Router;
