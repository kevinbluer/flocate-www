'use strict';

var _ = require('lodash');

// Get list of locationss
exports.index = function(req, res) {

	var Parse = require('parse').Parse;
	Parse.initialize("VVbJ2YjOdDJrY7sZw8fF4R1v2Wolgf3toi4o5SW0", "4zEOZdifrLJxr2exozJMGsE8SB7zmnienaMMsjTF");

	// pure temp stuff

	var query = new Parse.Query(Parse.User);
	query.equalTo("username", "kevinbluer");
	query.find({
	  success: function(user) {

	    var Checkin = Parse.Object.extend("Checkin");
		var query = new Parse.Query(Checkin);
		query.equalTo("User", user[0]);
		query.find({
		 	success: function(results) {
		  		res.json(JSON.stringify(results));
	  		},
		  	error: function(error) {
		    	res.json(error);
		  	}
		});

	  }
	});

	// var query = new Parse.Query(Parse.User);

	// query.find({
	//   success: function(users) {
	//   	// console.log();
	//   	res.json(users);
	//     // for (var i = 0; i < users.length; ++i) {
	//     //   console.log(users[i].get('username'));
	//     // }
	//   },
	//   error: function(error) {
	//   	console.log("here");
	//   }
	// });
	
};