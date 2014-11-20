'use strict';

var _ = require('lodash');

// Get list of auths
exports.index = function(req, res) {

	var Parse = require('parse').Parse;
	Parse.initialize("VVbJ2YjOdDJrY7sZw8fF4R1v2Wolgf3toi4o5SW0", "4zEOZdifrLJxr2exozJMGsE8SB7zmnienaMMsjTF");

	Parse.User.logIn(req.body.username, req.body.password, {
	  success: function(user) {
	    
	  	res.json(user);

	  },
	  error: function(user, error) {

	  	// TODO - handle the error scenarios

	    res.json(['nope']);
	  }
	});

};