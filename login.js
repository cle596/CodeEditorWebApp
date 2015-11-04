var redis = require("redis");
var client = redis.createClient();
//var prominence = require("prominence");
var Promise = require("bluebird");
var express = require("express");
//var express = prominence(require('express'));
//var pexpress = Promise.promisifyAll(require("express"));

module.exports = (function() {
    'use strict';
  //  console.log(typeof pexpress);
    var router = express.Router();
//    var post = Promise.promisify(require("express").Router().post);
    var logged_in = false;
    var response = "";
    router.post('/login',function(req, res) {
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
