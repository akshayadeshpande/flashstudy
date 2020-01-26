var createError = require('http-errors');
var express = require('express');
var path = require('path');
var db = require('./db')
const port = 10000

var router = require('./index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
