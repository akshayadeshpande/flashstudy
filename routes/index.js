var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var db = 'mongodb://127.0.0.1/local';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
