'use strict';

angular.module('flocateApp')
  .controller('DashboardCtrl', function ($scope, $location, $rootScope) {
    
  	if (!$rootScope.user) {
  		$location.path('/signin');
  	} else {
  		console.log($rootScope.user);

  		$scope.countries = "You've been to " + $rootScope.user.CountryList.length + " countries. Nice!";
  	}

  });
