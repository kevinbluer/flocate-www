'use strict';

angular.module('flocateApp')
  .controller('ViewtripCtrl', function($scope, $http, $stateParams) {

  	$scope.name = "Loading...";

  	$scope.moment = moment;

  	$scope.mapOptions = {
      center: new google.maps.LatLng(22.32532675380104, 114.169360706689),
      zoom: 2,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var infowindow;
    var checkins;
    var currentLocation = 0;

  	// $scope.initMap = function() {

  		// load the pins from parse
  		$http.get('/api/trip/' + $stateParams.tripId).
		  success(function(data, status, headers, config) {

		  	$scope.name = data[0].Name;
			$scope.description = data[0].Description;
			$scope.checkins = data[1];
			$scope.id = $stateParams.tripId;

			if ($scope.checkins == 0) {
				return;
			} 

		 	var bounds = new google.maps.LatLngBounds();
		 	var placeArray = [];

		 	for (var x = 0; x < $scope.checkins.length; x++ ) {

		 		var lat = $scope.checkins[x]["Location"]["latitude"];
		 		var lng = $scope.checkins[x]["Location"]["longitude"];
		 		var latLng = new google.maps.LatLng(lat, lng);

		 		var marker = new google.maps.Marker({
			        map : $scope.myMap,
			        position : latLng
			    });

		 		placeArray.push(latLng);
			    bounds.extend(marker.getPosition());

			    if (x == $scope.checkins.length-1) {
			    	$scope.lat = lat;
			    	$scope.lng = lng;
			    	$scope.date = $scope.checkins[x]["RecordedAt"].iso;
			    }
		 	}

		 	if (data[0].ContinuousTrip) {

			 	var line = new google.maps.Polyline({
				    path: placeArray,
				    strokeColor: "#FF0000",
				    strokeOpacity: 1.0,
				    strokeWeight: 2,
				    map: $scope.myMap
				});

			}

		 	$scope.myMap.fitBounds(bounds);

		  }).
		  error(function(data, status, headers, config) {
		  	console.log(data);
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
	// };

  });

angular.module('flocateApp')
  .controller('EditTripCtrl', function($scope, $http, $state, $stateParams) {

  		$http.get('/api/trip/' + $stateParams.tripId).
		  success(function(data, status, headers, config) {

		  	$scope.name = data[0].Name;
			$scope.description = data[0].Description;
			$scope.id = $stateParams.tripId;
			$scope.continuousTrip = data[0].ContinuousTrip;

		  }).
		  error(function(data, status, headers, config) {
		  	console.log(data);
		  });

		$scope.save = function() {

			$http.post('/api/trip/' + $stateParams.tripId, {name: $scope.name, description: $scope.description, continuousTrip: $scope.continuousTrip} ).
			  success(function(data, status, headers, config) {

				$state.go('viewTrip', { tripId: $stateParams.tripId, username: $stateParams.username })			  	

			  }).
			  error(function(data, status, headers, config) {
			  	console.log(data);
			  });
		}

  });


