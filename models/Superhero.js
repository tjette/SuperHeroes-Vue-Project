var mongoose = require('mongoose');

var SuperheroSchema = new mongoose.Schema({
    name: String,
    superPower: String,
    img: String

})

module.exports = mongoose.model('Superhero', SuperheroSchema)
