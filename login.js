var express = require('express');

module.exports = (function() {
    'use strict';
    var router = express.Router();
    var logged_in = false;
    var response = "";
    router.post('/login', function(req, res) {
	req.on("data", function(data) {
	    data = data.toString();
	    if (data == "changhanlee@gmail.comfuckman"){
		console.log(data);
		response = "Logged in!";
		res.send(response);
	    }
	    else{
		response = "Login Failed!";
		res.send(response);
	    }
	});
    });
    return router;
})();
