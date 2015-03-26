
Parse.Cloud.afterSave("_User", function(request) {

	// does the user already exist
	if (request.object.existed()) {
		
		// Get the last posted CountryCode2 (or CountryCode3)
		// Look up in the Countries class
		// Populate the CountryList (with both CountryCode2 + CountryCode3)

	}

});

Parse.Cloud.afterSave("Checkin", function(request) {

	var user = Parse.User.current();
	user.set("LastCountry", {CountryCode2: request.object.get("CountryCode2")});

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
});