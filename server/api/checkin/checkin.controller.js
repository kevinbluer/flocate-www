'use strict';

var _ = require('lodash');

var Parse = require('parse').Parse;
Parse.initialize("VVbJ2YjOdDJrY7sZw8fF4R1v2Wolgf3toi4o5SW0", "4zEOZdifrLJxr2exozJMGsE8SB7zmnienaMMsjTF");

// Get list of checkins for a given user

exports.index = function(req, res) {

	// TODO store the current Parse user in session
	// TODO this is very likely redundant given we might as well add it for the current user

	var userQuery = new Parse.Query(Parse.User);
	var user = userQuery.get(req.body.user.objectId)
	.then(function(user) {

		var Checkin = Parse.Object.extend("Checkin");
		var checkin = new Checkin();

		var relation = checkin.relation("User");
		relation.add(user);

		// TODO - Lookup onGoogle Maps API (note that this should be passed via the front-end)

		checkin.set("Note", req.body.what);
		checkin.set("Doing", req.body.where);
		checkin.set("City", "Angkor Wat");
		checkin.set("Country", "Cambodia");
		checkin.set("Address", "Angkor Wat, Cambodia");
		checkin.set("Location", new Parse.GeoPoint(parseFloat(req.body.lat), parseFloat(req.body.lng)));
		checkin.set("Visbility", "Friends");
		checkin.set("RecordedAt", new Date(req.body.dt));

		checkin.save(null, {
		  success: function(checkin) {
		    // Execute any logic that should take place after the object is saved.
		    console.log('New object created with objectId: ' + checkin.id);

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

// Get a single checkin by checkin Id

exports.checkinById = function(req, res) {

	// TODO add auth

	var Checkin = Parse.Object.extend("Checkin");
	var checkinQuery = new Parse.Query(Checkin);

	var checkin = checkinQuery.get(req.query.checkinId)
	.then(function(checkin) {

		res.json(checkin);

	});

};