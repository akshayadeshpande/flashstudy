var Card = require('../models/card')

module.exports.createCard = (cardData) => {
    const card = new Card(cardData)
    // All db operatons are async and need to supply a callback function
    return card.save(function (err) {
        if (err) console.log('Error with ' + cardData)
    })
}

module.exports.getAllCards = (req, res) => {
    Card.find({}, function (err, data) {res.send(data)});
}