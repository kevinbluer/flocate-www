'use strict';

var _ = require('lodash');

// Get list of locationss
exports.index = function(req, res) {

	var Parse = require('parse').Parse;
	Parse.initialize("VVbJ2YjOdDJrY7sZw8fF4R1v2Wolgf3toi4o5SW0", "4zEOZdifrLJxr2exozJMGsE8SB7zmnienaMMsjTF");

	var query = new Parse.Query(Parse.User);

	query.find({
	  success: function(users) {
	  	// console.log();
	  	res.json(users);
	    // for (var i = 0; i < users.length; ++i) {
	    //   console.log(users[i].get('username'));
	    // }
	  },
	  error: function(error) {
	  	console.log("here");
	  }
	});
	
};