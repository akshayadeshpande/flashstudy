var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    firstName : {type: String, required: True},
    lastName: {type: String, required: True},
    email: {type: String, required: True},
    password: {type: String, required: True},
})

module.exports = mongoose.model('User', userSchema)