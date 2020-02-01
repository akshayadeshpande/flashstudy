var Card = require('../models/card')

module.exports.createCard = (req, res) => {
    var card = new Card(req.body)
    // All db operatons are async and need to supply a callback function
    card.save(function (err, card) {
        if (err) res.status(400).send('Invalid arguments.')
        else res.sendStatus(201) 
    })
}

module.exports.getAllCards = (req, res) => {
    Card.find({}, function (err, cards) {
        if (err) res.status(400).send('Could not retrieve all the cards right now')
        else res.send(cards)
    });
}

module.exports.editCard = (req, res) => {
    Card.findByIdAndUpdate(req.params.id, req.body, {"new": true}, function (err, card){ 
        if (err) res.status(400).send('Invalid arguments.')
        else res.send(card)
    })
}

module.exports.getCard = (req, res) => {
    Card.findById(req.params.id, function (err, card){
        if (err) console.log(`Error with data ${err}`)
        if (!card) res.status(404).send('Card not found')
        else res.send(card)
    })
} 