'use strict';

angular.module('flocateApp')
  .controller('ViewByCountryCtrl', function ($scope, $http, $stateParams) {

  	// TODO - cap the zoom level on view?
  	// TODO - include the trips that span China too (e.g. backbacking through China with Stokesy)

  	$scope.mapOptions = {
      center: new google.maps.LatLng(0.1, 0.1),
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

  	// do lookup based on country code

  	$http.post('/api/locations/getCountryDetails', {"CountryCode3": $stateParams.countryCode}).
  		success(function(data, status, headers, config) {

  			$scope.countryName = data[0].CountryName;

  			$scope.mapOptions = {
		      center: new google.maps.LatLng(0.3, 0.3),
		      zoom: 15,
		      mapTypeId: google.maps.MapTypeId.ROADMAP
		    };

			$http.get('/api/checkin/checkinsByCountry', {}).
			success(function(data, status, headers, config) {

			  	angular.forEach(data, function(value, key) {

				    var marker = new google.maps.Marker({
				        map : $scope.myMap,
				        position : new google.maps.LatLng(value["Location"]["latitude"], value["Location"]["longitude"])
				    });

			    	google.maps.event.addListener(marker, 'click', function() {
					    
					    $("#pinTitle").html(value["Doing"]);
					    $("#pinDesc").html(value["Note"]);
					    $scope.checkinId = value.objectId;
					    $scope.pinDate = value["RecordedAt"]["iso"];
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
