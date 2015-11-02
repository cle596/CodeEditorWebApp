var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var fs = require('fs');
var crypto = require('crypto');
var express = require('express');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var getRawBody = require('raw-body');
var typer = require('media-typer');
var bodyParser = require('body-parser');
var app = express();
var session_option = require("./session-option");
app.use(session(session_option)); //order matters
app.use(express.static('public'));
app.post('/push', function(req, res) {
  var push_data = "";
  req.on("data", function(data) {
    push_data += data;
  });
  req.on("end", function() {
    var params = {
      Bucket: 'code-editor/brosf',
      Key: 'textdoc',
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
app.listen(8000, '0.0.0.0');
