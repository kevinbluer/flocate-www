'use strict';

angular.module('flocateApp')
  .controller('ViewByCountryCtrl', function ($scope, $http, $stateParams, Auth) {

  	var user = Auth.getCurrentUser();

    $scope.currentUser = user;

  	// TODO - cap the zoom level on view?
  	// TODO - include the trips that span China too (e.g. backbacking through China with Stokesy)

  	// do lookup based on country code
  	$scope.mapOptions = {
      center: new google.maps.LatLng(25, 0.1),
      zoom: 2,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

  	$http.post('/api/locations/getCountryDetails', {"CountryCode3": $stateParams.countryCode}).
  		success(function(data, status, headers, config) {

  			$scope.countryName = data[0].CountryName;

  			console.log(data[0]);

			$scope.myMap.setCenter(new google.maps.LatLng(data[0].CountryCenterPoint.latitude, data[0].CountryCenterPoint.longitude));
			$scope.myMap.setZoom(data[0].ZoomLevel);

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
