'use strict';

var _ = require('lodash');

// Get list of locationss
exports.index = function(req, res) {

	var Parse = require('parse').Parse;
	Parse.initialize("VVbJ2YjOdDJrY7sZw8fF4R1v2Wolgf3toi4o5SW0", "4zEOZdifrLJxr2exozJMGsE8SB7zmnienaMMsjTF");

	var query = new Parse.Query(Parse.User);
	query.equalTo("username", req.params.username);

	query.find({
	  success: function(user) {

	    var Checkin = Parse.Object.extend("Checkin");
		var query = new Parse.Query(Checkin);
		query.equalTo("User", user[0]);
		query.descending("RecordedAt");
		if (req.params.count != undefined) {
			query.limit(req.params.count);
		}
		query.find({
		 	success: function(results) {
		  		res.json(results);
	  		},
		  	error: function(error) {
		    	res.json(error);
		  	}
		});

	  }
	});
};

exports.getCountryDetails = function(req, res) {

	var Parse = require('parse').Parse;
	Parse.initialize("VVbJ2YjOdDJrY7sZw8fF4R1v2Wolgf3toi4o5SW0", "4zEOZdifrLJxr2exozJMGsE8SB7zmnienaMMsjTF");

	var query = new Parse.Query("Countries");
	query.equalTo("CountryCode3", req.body.CountryCode3);
	query.find({
	  success: function(country) {

	  	console.log(country);

	  	res.json(country);

	  }
	});

}