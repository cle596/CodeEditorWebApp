var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var fs = require('fs');
var crypto = require('crypto');
var express = require('express');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var cookieParser = require('cookie-parser');
var app = express();
var session_option = require("./session-option");
console.log(session_option);
app.use(session(session_option)); //do session management first
app.use(function (req, res, next) {
  //console.log(req.session.id); will print per request to all files
  next();
});
app.use(express.static('public'));
app.post('/push', function(req, res) {
  req.on("data", function(data) {
    console.log(data.toString());
    var params = {
      Bucket: 'code-editor/brosf',
      Key: 'shit',
      Body: data.toString()
    };
    console.log(params.Body);
    s3.putObject(params, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("Uploaded: " + params.Key + " " + params.Body);
      }
    });
  });
  //res.send(req.session.id);
  res.send("synced");
});
app.listen(8000, '0.0.0.0');
