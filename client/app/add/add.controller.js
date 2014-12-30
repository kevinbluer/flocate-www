'use strict';

angular.module('flocateApp')
  .controller('AddCtrl', function ($scope, $location, $rootScope, $http) {

    $scope.mapOptions = {
      center: new google.maps.LatLng(22.32532675380104, 114.169360706689),
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

  	if (!$rootScope.user) {
  		$location.path('/signin');
  	}

  	$scope.user = $rootScope.user;
  	$scope.what = '';
  	$scope.where = '';
  	$scope.lat = '';
  	$scope.lng = '';
  	$scope.dt = new Date();

    $scope.today = function() {
	     $scope.dt = new Date();
	  };

    var currentMarker;
    var geocoder = new google.maps.Geocoder();

    $scope.addMarker = function($event, $params) {

        // remove previous marker
        if (currentMarker) {
          currentMarker.setMap(null);
        }

        $scope.lat = $params[0].latLng.lat();
        $scope.lng = $params[0].latLng.lng();

        geocoder.geocode({'latLng': $params[0].latLng}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {

              $scope.where = results[1].formatted_address;

              // map.setZoom(11);
              // marker = new google.maps.Marker({
              //     position: latlng,
              //     map: map
              // });
              // infowindow.setContent();

            } else {
              alert('No results found');
            }
          } else {
            alert('Geocoder failed due to: ' + status);
          }
        });

        var marker = new google.maps.Marker({
            position : $params[0].latLng
        });

        marker.setMap($scope.myMap);

        currentMarker = marker;

        google.maps.event.addListener(marker, 'click', function() {
            // alert('yo');
        });

        // $scope.newMarker = marker;
    };

	  $scope.add = function() {

		  $http.post('/api/checkin', {user: $scope.user, what: $scope.what, where: $scope.where, lat: $scope.lat, lng: $scope.lng, dt: $scope.dt}).
    		success(function(data, status, headers, config) {

    			// redirect to place page
    			$location.path('/user/kevinbluer/' + data.objectId);

    		}).
    		error(function(data, status, headers, config) {

          console.log(data);

    			// TODO handle the error scenarios

    		});

	  }

});
