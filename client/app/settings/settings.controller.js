'use strict';

angular.module('flocateApp')
  .controller('SettingsCtrl', function ($scope) {

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
  		user.save();

  	}

  });