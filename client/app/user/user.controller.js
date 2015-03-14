'use strict';

angular.module('flocateApp')
  .controller('UserPublicCtrl', function ($scope, $http, $stateParams) {

	$http.get('/api/locations').
	success(function(data, status, headers, config) {
		$scope.places = data;

		$moment = moment;
	}).
	error(function(data, status, headers, config) {
		// console.log(data);

	});


	// TODO get public user details

	$http.get('/api/users/' + $stateParams.username).
	success(function(user, status, headers, config) {
		$scope.usersName = user.firstName + " " + user.lastName;
		$scope.currentUser = user.CountryList;

		var been = {
		  fillKey: 'MEDIUM',
		  numberOfThings: 10381
		};

		var places = {};

		for (var x = 0; x < user.CountryList.length; x++) {
			places[user.CountryList[x].CountryCode] = { fillKey: "HIGH" }
		}

		var map = new Datamap({
		element: document.getElementById('container'),
		projection: 'mercator',
		fills: {
		        HIGH: '#afafaf',
		        LOW: '#AFE549',
		        MEDIUM: '#417503',
		        UNKNOWN: 'rgb(0,0,0)',
		        defaultFill: '#7BBF37'
		    },
		data: places
		});

	}).
	error(function(data, status, headers, config) {
		console.log(data);

	});

});

angular.module('flocateApp')
  .controller('UserCtrl', function ($scope, $http, $stateParams, Auth) {

  	if ($stateParams.username == "") {
  		
  		// TODO - if empty show a different template (otherwise pass the appropriate parameter up to the API)
  		// TODO - also consider showing something differently if logged in or not (e.g. public profile)

  	} else {

  	}

  	var user = Auth.getCurrentUser();
  	$scope.title = "...";

  	// TODO - get logged out user details (e.g. name and public information)

  	if (user.username) {
  		$scope.title = "You";
  	} else {
  		$scope.title = "XYZ";
  	}

    $scope.currentUser = user;

  	// TODO set the center to the last recorded spot?
    $scope.mapOptions = {
      center: new google.maps.LatLng(22.32532675380104, 114.169360706689),
      zoom: 2,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      // , styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.man_made","elementType":"labels.text.fill","stylers":[{"lightness":"0"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"saturation":"3"},{"lightness":"-36"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"lightness":"-63"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#92c0d3"},{"visibility":"on"}]}]
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