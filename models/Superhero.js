var mongoose = require('mongoose');

var SuperheroSchema = new mongoose.Schema({
    name: String,
    superPower: String

})

module.exports = mongoose.model('Superhero', SuperheroSchema)
