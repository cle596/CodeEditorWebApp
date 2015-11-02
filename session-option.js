var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var crypto = require('crypto');

module.exports = {
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
    store: new RedisStore({
      host: 'localhost'
    }),
    secret: 'ejawofjewaoigjaweoigjwega',
    resave: true,
    rolling: true,
    saveUninitialized: true,
    unset: 'keep'
};
