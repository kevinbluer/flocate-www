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

	// var Trip = Parse.Object.extend("Trip");
	// var query = new Parse.Query(Trip);
	// query.get(req.params.tripId, function(trip) {

	//     var relation = trip.relation("Checkin");
	//     var query = relation.query();
	//     query.ascending("RecordedAt");
	//     query.find({
	//        success : function(checkins) {

	// 	       	var fullTrip = [trip];
	// 	       	fullTrip.push(checkins);

	// 	       	res.json(fullTrip);

	//        },
	//        error : function(error) {
	//           alert("Error: " + error.code + " " + error.message);
	//        }
	//     });
	// });
};

exports.updateTripByTripId = function(req, res) {

	var Trip = Parse.Object.extend("Trip");
	var query = new Parse.Query(Trip);
	query.get(req.params.tripId, function(trip) {

	    trip.set("Name", req.body.name);
	    trip.set("Description", req.body.description);
	    trip.set("ContinuousTrip", req.body.continuousTrip);

		trip.save(null, {
		  success: function(trip) {
		    // Execute any logic that should take place after the object is saved.

		    res.json(trip);
		  },
		  error: function(trip, error) {
		    // Execute any logic that should take place if the save fails.
		    // error is a Parse.Error with an error code and message.
		    console.log('Failed to update object, with error code: ' + error.message);

		    // res.json([]);
		  }
		});

	    res.json({});
	});
};

exports.addCheckinToTrip = function(req, res) {

	console.log(req.body.checkinId);
	console.log(req.body.tripId);

	var Trip = Parse.Object.extend("Trip");
	var query = new Parse.Query(Trip);

	var trip = query.get(req.body.tripId)
	.then(function(trip) {

		var Checkin = Parse.Object.extend("Checkin");
		var query = new Parse.Query(Checkin);

		var checkin = query.get(req.body.checkinId)
			.then(function(checkin) {

				var relation = checkin.relation("Trip");
				relation.add(trip);

				checkin.save(null, {
				  success: function(checkin) {

				    var relationTrip = trip.relation("Checkin");
					relationTrip.add(checkin);

					trip.save(null, {
					  success: function(checkin) {
					    // Execute any logic that should take place after the object is saved.
					    // console.log('redirect or summit');
					    res.json(trip);

					  },
					  error: function(gameScore, error) {
					    // Execute any logic that should take place if the save fails.
					    // error is a Parse.Error with an error code and message.
					    console.log('Failed to create new object, with error code: ' + error.message);

					    // res.json([]);
					  }
					});

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
		trip.set("ContinuousTrip", true);

		trip.save(null, {
		  success: function(checkin) {
		    // Execute any logic that should take place after the object is saved.
		    res.json(checkin);

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