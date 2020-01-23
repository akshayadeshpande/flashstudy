var express = require('express')
var router = express.Router()
var cardController = require('../controllers/card')

/* GET home page. */
router.get('/cards', function(req, res, next) { 
    cardController.getAllCards(req, res)
});


module.exports = router
