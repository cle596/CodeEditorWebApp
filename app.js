var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var fs = require('fs');
var crypto = require('crypto');
var express = require('express');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var cookieParser = require('cookie-parser');
var app = express();
//app.use(cookieParser());
app.use(session({
  name: "mycookie",
  genid: function(req) {
    var sha = crypto.createHash('sha256');
    sha.update(Math.random().toString());
    return sha.digest('hex');
  },
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 60000
  },
  /*
  store: new MemoryStore,
  store: new RedisStore({
    host: 'localhost'
  }),
  */
  secret: 'ejawofjewaoigjaweoigjwega',
  resave: true,
  rolling: true,
  saveUninitialized: true,
  unset: 'keep'
}));
app.use(express.static('public'));
app.use(function(err, req, res, next) {
  console.log(req.session.id);
  next();
});
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
