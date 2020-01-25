var express = require('express')
var router = express.Router()
var cardController = require('../controllers/card')

router.get('/cards', function(req, res, next) { 
    cardController.getAllCards(req, res)
});

router.post('/cards', function(req, res, next) {
    cardController.createCard(req, res)
})

router.post('/cards/:id', function(req, res, next) {
    cardController.editCard(req, res)
})

router.get('/cards/:id', function(req, res, next) {
    cardController.getCard(req, res)
})
module.exports = router