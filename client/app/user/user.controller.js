'use strict';

angular.module('flocateApp')
  .controller('UserCtrl', function ($scope) {

    $scope.mapOptions = {
      center: new google.maps.LatLng(22.32532675380104, 114.169360706689),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var infowindow;

    // var map = $scope.myMap;

    // var map = new google.maps.Map(mapElement[0], myOptions);
    // map.setOptions({styles: styles});

    // var myIcon = new google.maps.MarkerImage("/assets/images/940-pin@2x.png", null, null, null, new google.maps.Size(20,40));

    // var marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(22.32532675380104, 114.169360706689),
    //     map: map,
    //     icon: myIcon
    // });

  	$scope.initMap = function() {

	    // if (!$scope.mapLoaded)
	    //     $scope.getLocation();
	    // $scope.mapLoaded = true;
	    $scope.newMarker = new google.maps.Marker({
	        map : $scope.myMap,
	        position : new google.maps.LatLng(22.32532675380104, 114.169360706689)
	    });
	};

    $scope.addMarker = function($event, $params) {
	    $scope.newMarker = new google.maps.Marker({
	        map : $scope.myMap,
	        position : $params[0].latLng
	    });
	};

  });

function onGoogleReady() {
  	// angular.bootstrap(document.getElementById("map"), ['ui-map']);
}