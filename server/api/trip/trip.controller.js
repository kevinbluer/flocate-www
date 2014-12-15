/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /trip              ->  index
 * POST    /trip              ->  create
 * GET     /trip/:id          ->  show
 * PUT     /trip/:id          ->  update
 * DELETE  /trip/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

var Parse = require('parse').Parse;
Parse.initialize("VVbJ2YjOdDJrY7sZw8fF4R1v2Wolgf3toi4o5SW0", "4zEOZdifrLJxr2exozJMGsE8SB7zmnienaMMsjTF");

// Get list of trips
exports.getAllByUserId = function(req, res) {

	var Trip = Parse.Object.extend("Trip");
	var query = new Parse.Query(Trip);

	query.equalTo("User", Parse.User.current());

	// NOTE This is relying on Parse.User and therefore the user being logged in...

	query.find({
	  success: function(results) {
	    res.json(results);
	  },
	  error: function(error) {
	    // TODO handle the error
	  }
	});
};

exports.getTripByTripId = function(req, res) {

	var Trip = Parse.Object.extend("Trip");
	var query = new Parse.Query(Trip);

	var trip = query.get(req.params.tripId)
	.then(function(trip) {

		res.json(trip);

	});
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
		trip.set("Description", req.body.description);

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