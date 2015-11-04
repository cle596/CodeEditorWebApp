var express = require('express');
var redis = require("redis"),
  client = redis.createClient();

module.exports = (function() {
  'use strict';
  var router = express.Router();
  var logged_in = false;
  var response = "";
  router.post('/login', function(req, res) {
    req.on("data", function(data) {
      client.get(data, function(err, reply) {
        console.log(reply);
      });
      data = data.toString();
      if (data == "changhanlee@gmail.comfuckman") {
        console.log(data);
        res.send("Logged in!");
      } else {
        res.send("Login fail!");
      }
    });
  });
  return router;
})();
