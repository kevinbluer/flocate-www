'use strict';

var _ = require('lodash');

var Parse = require('parse').Parse;
Parse.initialize("VVbJ2YjOdDJrY7sZw8fF4R1v2Wolgf3toi4o5SW0", "4zEOZdifrLJxr2exozJMGsE8SB7zmnienaMMsjTF");

// Get list of trips
exports.index = function(req, res) {
  res.json([]);
};

exports.add = function(req, res) {

	var userQuery = new Parse.Query(Parse.User);

	var user = userQuery.get(Parse.User.current().id)
	.then(function(user) {

		var Trip = Parse.Object.extend("Trip");
		var trip = new Trip();

		var relation = trip.relation("User");
		relation.add(Parse.User.current());

		// TODO - Lookup onGoogle Maps API (note that this should be passed via the front-end)

		trip.set("Name", req.body.name);

		trip.save(null, {
		  success: function(checkin) {
		    // Execute any logic that should take place after the object is saved.
		    console.log('New object created with objectId: ' + trip.id);

		    // res.json([]);
		  },
		  error: function(gameScore, error) {
		    // Execute any logic that should take place if the save fails.
		    // error is a Parse.Error with an error code and message.
		    console.log('Failed to create new object, with error code: ' + error.message);

		    // res.json([]);
		  }
		});

	});
};