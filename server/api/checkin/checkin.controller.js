'use strict';

var _ = require('lodash');

// Get list of checkins
exports.index = function(req, res) {

	var Parse = require('parse').Parse;
	Parse.initialize("VVbJ2YjOdDJrY7sZw8fF4R1v2Wolgf3toi4o5SW0", "4zEOZdifrLJxr2exozJMGsE8SB7zmnienaMMsjTF");

	var userQuery = new Parse.Query(Parse.User);
	var user = userQuery.get(req.body.user.objectId)
	.then(function(user) {

		var Checkin = Parse.Object.extend("Checkin");
		var checkin = new Checkin();

		var relation = checkin.relation("User");
		relation.add(user);

		checkin.set("Note", "Taking Pictures");
		checkin.set("Doing", "Angkor Wat");
		checkin.set("City", "Angkor Wat");
		checkin.set("Country", "Cambodia");
		checkin.set("Address", "Angkor Wat, Cambodia");
		checkin.set("Location", new Parse.GeoPoint(13.4125, 103.8667));
		checkin.set("Visbility", "Friends");
		checkin.set("RecordedAt", new Date());

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