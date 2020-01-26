var Quiz = require('../models/quiz')

module.exports.startQuiz = (req, res) => {
    var quiz = Quiz()
    quiz.save(function (err, quiz) {
        if (err) res.status(400).send("Could not start a new quiz right now")
        else res.status(201).send(quiz.id)
    })
}

module.exports.editQuiz = (req, res) => {
    Quiz.findByIdAndUpdate(req.params.id, req.body, {"new": true}, function (err, quiz){ 
        if (err) res.status(400).send('Invalid arguments.')
        if (!quiz) res.status(404).send('Quiz not found')
        else res.send(quiz)
    })
}

module.exports.getQuiz = (req, res) => {
    Quiz.findById(req.params.id, function(err, quiz) {
        if (err) res.status(400).send('Invalid arguments.')
        if (!quiz) res.status(404).send('Quiz not found')
        else res.send(quiz)
    })
}

module.exports.getAllQuizzes = (req, res) => {
    Quiz.find({}, function (err, quizzes) {
        if (err) res.status(400).send('Could not retrieve all the cards right now')
        else res.send(quizzes)
    });
}