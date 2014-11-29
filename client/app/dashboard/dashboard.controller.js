'use strict';

angular.module('flocateApp')
  .controller('DashboardCtrl', function ($scope, $location, $rootScope) {

  	if (!$rootScope.user) {
  		$location.path('/signin');
  	} else {

  		var been = {
            fillKey: 'MEDIUM',
            numberOfThings: 10381
        };

	  	var places = {};

	  	angular.forEach($rootScope.user.CountryListCode, function(value, key) {

	  		places[value] = been;

	  	});

		var map = new Datamap({
			element: document.getElementById('container'),
			fills: {
	            HIGH: '#afafaf',
	            LOW: '#123456',
	            MEDIUM: 'blue',
	            UNKNOWN: 'rgb(0,0,0)',
	            defaultFill: 'green'
	        },
			data: places
		});

  		$scope.countries = "You've been to " + $rootScope.user.CountryList.length + " countries. Nice work!";

  		$scope.countryList = $rootScope.user.CountryList;

  		// TODO On the dashboard list the countries with hyperlinks to their center (and enough visibility to see the entire country)
  	}

  });
