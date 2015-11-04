var express = require('express');

module.exports = (function() {
  'use strict';
  var router = express.Router();
  router.post('/login', function(req, res) {
    req.on("data", function(data) {
      console.log(data);
    });
    res.send("Logged in as ");
  });
  return router;
})();
