
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
	console.log(user);

});