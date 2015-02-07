'use strict';

angular.module('flocateApp')
  .controller('ViewByCountryCtrl', function ($scope, $http, $stateParams, Auth) {

  	$scope.countryName = "Loading...";

  	var user = Auth.getCurrentUser();

    $scope.currentUser = user;

  	// TODO - cap the zoom level on view?
  	// TODO - include the trips that span the country too (e.g. backbacking through China with Stokesy)

  	// lookup based on country code
  	$scope.mapOptions = {
      center: new google.maps.LatLng(25, 0.1),
      zoom: 2,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

  	$http.post('/api/locations/getCountryDetails', {"CountryCode3": $stateParams.countryCode}).
  		success(function(data, status, headers, config) {

  			// set the page title
  			$scope.countryName = "You + " + data[0].CountryName;

  			// set the map
			$scope.myMap.setCenter(new google.maps.LatLng(data[0].CountryCenterPoint.latitude, data[0].CountryCenterPoint.longitude));
			$scope.myMap.setZoom(data[0].ZoomLevel);

			// get the checkins
			$http.get('/api/checkin/checkinsByCountry', { CountryCode3: data[0].CountryCode3 }).
			success(function(data, status, headers, config) {

			  	angular.forEach(data, function(value, key) {

			  		// lay a marker
				    var marker = new google.maps.Marker({
				        map : $scope.myMap,
				        position : new google.maps.LatLng(value["Location"]["latitude"], value["Location"]["longitude"])
				    });

				    $scope.newMarker = marker;

				});

			}).
			error(function(data, status, headers, config) {

				// TODO handle the error scenarios

			});

  		}).
  		error(function(data, status, headers, config) {

		// TODO handle the error scenarios

	});

  });
