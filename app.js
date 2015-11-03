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
var push = require("./push");
var app = express();
var session_option = require("./session-option");
app.use(session(session_option)); //order matters
app.use(express.static('public'));
app.use('/push',push);
app.listen(8000, '0.0.0.0');
