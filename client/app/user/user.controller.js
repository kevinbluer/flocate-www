'use strict';

angular.module('flocateApp')
  .controller('UserCtrl', function ($scope, $http) {

    $scope.mapOptions = {
      center: new google.maps.LatLng(22.32532675380104, 114.169360706689),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var infowindow;
    var checkins;
    var currentLocation = 0;
    var position = 1;

  	$scope.initMap = function() {

  		// load the pins from parse
  		$http.get('/api/locations').
		  success(function(data, status, headers, config) {

		  	checkins = JSON.parse(data);

		  	angular.forEach(checkins, function(value, key) {

			    var marker = new google.maps.Marker({
			        map : $scope.myMap,
			        position : new google.maps.LatLng(value["Location"]["latitude"], value["Location"]["longitude"])
			    });

			    if (currentLocation == 0) {
			    	$("#pinTitle").html(value["Doing"]);
			    	$("#pinDesc").html(value["Note"]);
			    	$scope.pinDate = value["RecordedAt"]["iso"];
			    }

			    currentLocation += 1;

		    	google.maps.event.addListener(marker, 'click', function() {
				    
				    $("#pinTitle").html(value["Doing"]);
				    $("#pinDesc").html(value["Note"]);
				    $scope.pinDate = value["RecordedAt"]["iso"];
				});

			    $scope.newMarker = marker;

			});

		    // this callback will be called asynchronously
		    // when the response is available
		  }).
		  error(function(data, status, headers, config) {
		  	console.log(data);
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });

	    $scope.newMarker = new google.maps.Marker({
	        map : $scope.myMap,
	        position : new google.maps.LatLng(22.32532675380104, 114.169360706689)
	    });
	};

	$scope.previous = function() {

		// temp position handling

		$("#pinTitle").html(checkins[position]["Doing"]);
		$("#pinDesc").html(checkins[position]["Note"]);
		$scope.pinDate = checkins[position]["RecordedAt"]["iso"];

		$scope.myMap.setCenter(new google.maps.LatLng(checkins[position]["Location"]["latitude"], checkins[position]["Location"]["longitude"]));

		position += 1;
	};

	$scope.next = function() {
		alert("next");
	};

    $scope.addMarker = function($event, $params) {

    	var marker = new google.maps.Marker({
	        map : $scope.myMap,
	        position : $params[0].latLng
	    });

    	google.maps.event.addListener(marker, 'click', function() {
		    // alert('yo');
		});

	    $scope.newMarker = marker;
	};

	$scope.markerClick = function($event, $params) {
		// alert("yo");
	};

  });

function onGoogleReady() {
  	// angular.bootstrap(document.getElementById("map"), ['ui-map']);
}