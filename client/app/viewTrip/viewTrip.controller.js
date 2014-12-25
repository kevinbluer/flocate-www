'use strict';

angular.module('flocateApp')
  .controller('ViewtripCtrl', function($scope, $http, $stateParams) {

  	$scope.mapOptions = {
      center: new google.maps.LatLng(22.32532675380104, 114.169360706689),
      zoom: 1,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var infowindow;
    var checkins;
    var currentLocation = 0;

  	$scope.initMap = function() {

  		// load the pins from parse
  		$http.get('/api/trip/' + $stateParams.tripId).
		  success(function(data, status, headers, config) {

		  	$scope.name = data[0].Name;
			$scope.description = data[0].Description;
			$scope.checkins = data[1];

			// console.log(data[1]);

			// return;

		 //  	checkins = JSON.parse($scope.checkins);

		  	angular.forEach($scope.checkins, function(value, key) {

			    var marker = new google.maps.Marker({
			        map : $scope.myMap,
			        position : new google.maps.LatLng(value["Location"]["latitude"], value["Location"]["longitude"])
			    });

			    if (currentLocation == 0) {
			    	$("#pinTitle").html(value["Doing"]);
			    	$("#pinDesc").html(value["Note"]);
			    	$scope.pinDate = value["RecordedAt"]["iso"];
			    	$scope.checkinId = value.objectId;
			    	$scope.myMap.setCenter(new google.maps.LatLng(value["Location"]["latitude"], value["Location"]["longitude"]));
			    }

			    currentLocation += 1;

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
		  	console.log(data);
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
	};

  });
