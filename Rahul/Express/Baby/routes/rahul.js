var express = require('express');
var fs = require('fs');
var net = require('net');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('rahul', { title: 'Rahul', test: 'Test' });
});

net.createServer()


module.exports = router;
