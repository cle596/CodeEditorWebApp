var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var fs = require('fs');

var crypto = require('crypto');

var redis = require("redis"),
    client = redis.createClient();

var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var express = require('express');
var app = express();

app.use(express.static('public'));

app.use(session({
  genid: function(req) {
    var sha = crypto.createHash('sha256');
    sha.update(Math.random().toString());
    return sha.digest('hex');
  },
  store: new RedisStore({
    host: 'localhost'
  }),
  secret: '1443170043732756752',
  resave: false,
  saveUninitialized: false
}));

app.get('/', function(req, res) {
  console.log(req.session);
});
app.post('/push', function(req, res) {
  req.on("data", function(data) {
    console.log(data.toString());
    var params = {
      Bucket: 'code-editor/brosf',
      Key: 'shit',
      Body: data.toString()
    };
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
