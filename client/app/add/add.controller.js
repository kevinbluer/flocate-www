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

    $scope.addMarker = function($event, $params) {

        // remove previous marker
        if (currentMarker) {
          currentMarker.setMap(null);
        }

        $scope.lat = $params[0].latLng.lat();
        $scope.lng = $params[0].latLng.lng();

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

    			// TODO redirect to place page
          console.log(data);

    			// temp
    			$location.path('/dashboard');

    		}).
    		error(function(data, status, headers, config) {

    			// TODO handle the error scenarios

    		});

	  }

});
