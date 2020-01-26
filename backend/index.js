var express = require('express')
var router = express.Router()
var cardController = require('./controllers/card')
var quizController = require('./controllers/quiz')

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

router.post('/quizzes', function(req, res, next) {
    quizController.startQuiz(req, res)
})

router.get('/quizzes/:id', function(req, res, next) {
    quizController.getQuiz(req, res)
})

router.post('/quizzes/:id', function(req, res, next) {
    quizController.editQuiz(req, res)
})

router.get('/quizzes', function (req, res, next) {
    quizController.getAllQuizzes(req, res)
})

module.exports = router