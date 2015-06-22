'use strict';

angular.module('flocateApp')
  .controller('SettingsCtrl', function ($scope, Modal) {

  	var user = Parse.User.current();

  	if (user) {
	    $scope.firstname = user.get("firstName");
	    $scope.lastname = user.get("lastName");
	    $scope.email = user.get("email");
	    $scope.location = user.get("location");
  	}

  	$scope.save = function(firstname, lastname, email, location) {

  		var user = Parse.User.current();

  		user.set("firstName", firstname);
  		user.set("lastName", lastname);
  		user.set("email", email);
  		user.set("location", location);
  		user.save(null, {
			success: function() {
				alert("Settings Updated :)");
		  },
		  	error: function(user, error) {
		    	alert("Unable to save! Please try again.");
		  }
		});
  	}

  });