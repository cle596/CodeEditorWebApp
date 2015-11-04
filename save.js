var express = require('express');
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

module.exports = (function() {
  'use strict';
  var router = express.Router();
  router.post('/save', function(req, res) {
    var push_data = "";
    req.on("data", function(data) {
      push_data += data;
    });
    req.on("end", function() {
      var params = {
        Bucket: 'code-editor/changhanlee@gmail.com',
        Key: 'test',
        Body: push_data.toString()
      };
      s3.putObject(params, function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("Uploaded to: " + params.Key);
          push_data = "";
        }
      });
    });
    res.send("Saved to cloud.");
  });
  return router;
})();
