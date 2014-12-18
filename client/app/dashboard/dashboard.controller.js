'use strict';

angular.module('flocateApp')
  .controller('DashboardCtrl', function ($scope, $location, $rootScope, $http) {

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
  		
  		$http.get('/api/checkin/allCheckins', {}).
    		success(function(data, status, headers, config) {

    			// TODO - relocation to trip page

    			$scope.checkins = data;

    		}).
    		error(function(data, status, headers, config) {

    			// TODO handle the error scenarios

    		});

        $http.get('/api/trip/get/kevinbluer', {}).
        success(function(data, status, headers, config) {

          // TODO - relocation to trip page

          $scope.trips = data;

        }).
        error(function(data, status, headers, config) {

          // TODO handle the error scenarios

        });



  	}

  });
