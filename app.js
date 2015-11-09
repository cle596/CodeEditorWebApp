var fs = require('fs');
var crypto = require('crypto');
var express = require('express');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var getRawBody = require('raw-body');
var typer = require('media-typer');
var bodyParser = require('body-parser');
var save = require("./save");
var login = require("./login");

var app = express();
var session_option = require("./session-option");

app.use(session(session_option));
app.use(express.static('public'));
app.use('/',save);
app.use('/',login);
app.listen(8001, '0.0.0.0');
