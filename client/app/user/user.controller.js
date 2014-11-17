'use strict';

angular.module('flocateApp')
  .controller('UserCtrl', function ($scope, $http) {

    $scope.mapOptions = {
      center: new google.maps.LatLng(22.32532675380104, 114.169360706689),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var infowindow;

  	$scope.initMap = function() {

  		// load the pins from parse
  		$http.get('/api/locations').
		  success(function(data, status, headers, config) {

		  	var checkins = JSON.parse(data);

		  	angular.forEach(checkins, function(value, key) {

			    var marker = new google.maps.Marker({
			        map : $scope.myMap,
			        position : new google.maps.LatLng(value["Location"]["latitude"], value["Location"]["longitude"])
			    });

		    	google.maps.event.addListener(marker, 'click', function() {
				    
				    $("#pinTitle").html(value["Doing"]);
				    $("#pinDesc").html(value["Note"]);
				    console.log(value);
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

    $scope.addMarker = function($event, $params) {

    	debugger;

    	var marker = new google.maps.Marker({
	        map : $scope.myMap,
	        position : $params[0].latLng
	    });

    	google.maps.event.addListener(marker, 'click', function() {
		    alert('yo');
		});

	    $scope.newMarker = marker;
	};

	$scope.markerClick = function($event, $params) {
		alert("yo");
	};

  });

function onGoogleReady() {
  	// angular.bootstrap(document.getElementById("map"), ['ui-map']);
}