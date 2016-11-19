var express = require('express');
var path = require("path");
var router = express.Router();

router.get('/', function (req, res) {
	res.render('index');
});

// router.get('/:word', function (req, res) {
// 	res.render('index', {word: req.params.word.toLowerCase()});
// });

module.exports = router;