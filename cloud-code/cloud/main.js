
Parse.Cloud.afterSave("_User", function(request) {

	console.log("x");

	// does the user already exist
	if (request.object.existed()) {
		
		console.log("y");

	}

});