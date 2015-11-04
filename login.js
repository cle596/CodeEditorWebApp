var express = require('express');
var redis = require("redis"),
client = redis.createClient();
var StringDecoder = require('string_decoder').StringDecoder;

module.exports = (function() {
    'use strict';
    var router = express.Router();
    var logged_in = false;
    var response = "";
    var decoder = new StringDecoder('utf8');
    router.post('/login', function(req, res) {
	req.on("data", function(data) {
	    data = JSON.parse(data.toString('utf8'));
	    client.get(data.user, function(err, reply) {
		if (data.pw == reply) {
		    res.send("Logged in!");
		} else {
		    res.send("Login fail!");
		}
	    }); 
	});
    });
    return router;
})();
