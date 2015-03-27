'use strict';

var _ = require('lodash');

// var geocoderProvider = 'google';
// var httpAdapter = 'https';
// // optionnal
// var extra = {
//     apiKey: '', // for Mapquest, OpenCage, Google Premier
//     formatter: null         // 'gpx', 'string', ...
// };

// var geocoder = require('node-geocoder').getGeocoder(geocoderProvider, httpAdapter, extra);

var Parse = require('parse').Parse;
Parse.initialize("VVbJ2YjOdDJrY7sZw8fF4R1v2Wolgf3toi4o5SW0", "4zEOZdifrLJxr2exozJMGsE8SB7zmnienaMMsjTF");

exports.index = function(req, res) {

	// note that we need to query the user to get a pointer (as opposed to the object itself)
	var userQuery = new Parse.Query(Parse.User);
	var user = userQuery.get(Parse.User.current().id)
	.then(function(user) {

		var Checkin = Parse.Object.extend("Checkin");
		var checkin = new Checkin();

		var relation = checkin.relation("User");
		relation.add(user);

		// geocoder.reverse(45.767, 4.833, function(err, res) {
		//     console.log(res);
		// });

		var userCountryList = user.attributes.CountryList;
		var alreadyVisited = false;

		for (var v = 0; v < userCountryList.length; v++) {

			if (userCountryList[v].CountryCode == req.body.countryShort) {
				alreadyVisited = true;
			}
		}

		if (!alreadyVisited) {
			userCountryList.push({"CountryCode": req.body.countryShort,"CountryName": req.body.countryLong});
		}

		var currentUser = Parse.User.current();
		currentUser.set("CountryList", userCountryList);
		currentUser.save();

		checkin.set("Note", req.body.what);
		checkin.set("Doing", req.body.where);
		checkin.set("City", "Angkor Wat");
		checkin.set("Country", req.body.countryLong);
		checkin.set("CountryCode2", req.body.countryShort);
		checkin.set("Address", req.body.where);
		checkin.set("Location", new Parse.GeoPoint(parseFloat(req.body.lat), parseFloat(req.body.lng)));
		checkin.set("Visbility", "Friends");
		checkin.set("RecordedAt", new Date(req.body.dt));

		checkin.save(null, {
		  success: function(checkin) {
		    // Execute any logic that should take place after the object is saved.

		    res.json(checkin);
		  },
		  error: function(gameScore, error) {
		    // Execute any logic that should take place if the save fails.
		    // error is a Parse.Error with an error code and message.
		    console.log('Failed to create new object, with error code: ' + error.message);
		  }
		});

	});
};


// get list of checkins for a given user

exports.allCheckins = function(req, res) {

	var Checkin = Parse.Object.extend("Checkin");
	var query = new Parse.Query(Checkin);

	query.equalTo("User", Parse.User.current());
	query.descending("RecordedAt");
	query.limit(10);

	// NOTE This is relying on Parse.User and therefore the user being logged in...

	query.find({
	  success: function(results) {
	    res.json(results);
	  },
	  error: function(error) {
	    console.log(error);
	  }
	});

}

// get a single checkin from a given checkinId

exports.checkinById = function(req, res) {

	// TODO add auth

	var Checkin = Parse.Object.extend("Checkin");
	var checkinQuery = new Parse.Query(Checkin);

	var checkin = checkinQuery.get(req.query.checkinId)
	.then(function(checkin) {

		res.json(checkin);

	});

};

// get a all checks for a user based on a country

exports.checkinsByCountry = function(req, res) {

	var Checkin = Parse.Object.extend("Checkin");
	var query = new Parse.Query(Checkin);

	query.equalTo("CountryCode2", req.body.CountryCode2);
	query.ascending("RecordedAt");

	query.find({
	  success: function(results) {
	    res.json(results);
	  },
	  error: function(error) {
	    console.log(error);
	  }
	});
}

exports.starCheckin = function(req, res) {

	var Checkin = Parse.Object.extend("Checkin");
	var checkinQuery = new Parse.Query(Checkin);

	var checkin = checkinQuery.get(req.body.checkinId)
	.then(function(checkin) {

		checkin.set("Starred", true)

		checkin.save(null, {
		  success: function(checkin) {
		    // Execute any logic that should take place after the object is saved.

		    res.json(checkin);
		  },
		  error: function(gameScore, error) {
		    // Execute any logic that should take place if the save fails.
		    // error is a Parse.Error with an error code and message.
		    console.log('Failed to update object, with error code: ' + error.message);

		    // res.json([]);
		  }
		});

	});
}

exports.getStarredCheckins = function(req, res) {

	// TODO get the checkins based on the stateParam instead

	var Checkin = Parse.Object.extend("Checkin");
	var query = new Parse.Query(Checkin);

	query.equalTo("User", Parse.User.current());
	query.equalTo("Starred", true);
	query.ascending("RecordedAt");

	query.find({
	  success: function(results) {
	    res.json(results);
	  },
	  error: function(error) {
	    console.log(error);
	  }
	});
}