var mongoose = require('mongoose')

// Defines the schema for a simple card
var Schema = mongoose.Schema

var quizSchema = new Schema({

    date: {type: Date, default: Date.now},
    correctScore: {type: Number, required: true, default: 0},
    incorrectScore : {type: Number, required: true, default: 0}

})

// Compiles the card schema for model
module.exports = mongoose.model('quiz', quizSchema)