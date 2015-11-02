var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var fs = require('fs');

var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/', function(req, res) {});
app.post('/push', function(req, res) {
  req.on("data", function(data) {
    console.log(data.toString());
    var params = {
      Bucket: 'code-editor',
      Key: 'shit',
      Body: data.toString()
    };
    s3.putObject(params, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully uploaded: " + params.Key + " " + params.Body);
      }
    });
  });
  res.send("shitreply");
});
app.listen(8000, '0.0.0.0');
