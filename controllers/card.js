var Card = require('../models/card')

module.exports.createCard = (req, res) => {
    const card = new Card(req.body)
    // All db operatons are async and need to supply a callback function
    card.save(function (err, card) {
        if (err) console.log(`Error with data ${req.body}`)
        res.sendStatus(200) 
    })
}

module.exports.getAllCards = (req, res) => {
    Card.find({}, function (err, cards) {
        res.send(cards)
    });
}

module.exports.editCard = (req, res) => {
    Card.findByIdAndUpdate(req.params.id, req.body, function (err, card){ 
        if (err) console.log(`Error with data ${err}`)
        else res.sendStatus(200)
    })
}

module.exports.getCard = (req, res) => {
    Card.findById(req.params.id, function (err, card){
        if (err) console.log(`Error with data ${err}`)
        else res.send(card)
    })
}