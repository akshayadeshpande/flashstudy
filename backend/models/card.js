var mongoose = require('mongoose')

// Defines the schema for a simple card
var Schema = mongoose.Schema

var cardSchema = new Schema({

    question: {type: String, required: true},
    answer: {type: String, required: true}
    
})

// Compiles the card schema for model
module.exports = mongoose.model('card', cardSchema)