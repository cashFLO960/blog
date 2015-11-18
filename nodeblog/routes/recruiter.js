var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('localhost/dataops');

/* recruiter info */
router.get('/recruiter', function(req, res) {
	res.send('hello world');
});

module.exports = router;