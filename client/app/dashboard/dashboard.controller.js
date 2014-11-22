'use strict';

angular.module('flocateApp')
  .controller('DashboardCtrl', function ($scope, $location, $rootScope) {
    
  	if (!$rootScope.user) {
  		$location.path('/signin');
  	} else {
  		console.log($rootScope.user);

  		$scope.countries = "You've been to " + $rootScope.user.CountryList.length + " countries. Nice work!";

  		// TODO On the dashboard list the countries with hyperlinks to their center (and enough visibility to see the entire country)
  	}

  });
