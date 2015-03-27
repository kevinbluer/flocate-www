
Parse.Cloud.afterSave("_User", function(request) {

	// does the user already exist
	if (request.object.existed()) {
		
		// Get the last posted CountryCode2 (or CountryCode3)
		// Look up in the Countries class
		// Populate the CountryList (with both CountryCode2 + CountryCode3)

	}

});

Parse.Cloud.afterSave("Checkin", function(request) {

	// TODO do the lookup to the Country class and store both country code lengths

	var countryCode = request.object.get("CountryCode2");

	if (countryCode.length === 2) {

		var query = new Parse.Query("Countries");
		query.equalTo("CountryCode2", countryCode);
		query.first({
			success: function(country) {
			  
				var lastCountry = {CountryCode2: country.get("CountryCode2"), CountryCode3: country.get("CountryCode3"), CountryName: country.get("CountryName")};

				var user = Parse.User.current();
				user.set("LastCountry", lastCountry);

				// var userCountryList = user.attributes.CountryList;
				// var alreadyVisited = false;

				// for (var v = 0; v < userCountryList.length; v++) {

				// 	if (userCountryList[v].CountryCode == req.body.countryShort) {
				// 		alreadyVisited = true;
				// 	}
				// }

				// if (!alreadyVisited) {
				// 	userCountryList.push({"CountryCode": req.body.countryShort,"CountryName": req.body.countryLong});
				// }

				user.set("CountryList", lastCountry);

				// TODO set the CountryList (as long as it's not already present)

				user.save(null, {
				  success: function(user) {
				    // Execute any logic that should take place after the object is saved.
				    console.log("updated user");
				    
				  },
				  error: function(gameScore, error) {
				    // Execute any logic that should take place if the save fails.
				    // error is a Parse.Error with an error code and message.
				    console.log('Failed to create new object, with error code: ' + error.message);
				  }
				});

		},
			error: function(error) {
			  console.error("Got an error " + error.code + " : " + error.message);
			}
		});

	}

	
});