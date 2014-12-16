'use strict';

angular.module('flocateApp')
  .controller('ViewcheckinCtrl', function ($scope, $http, $stateParams, $log) {

  	var mapOptions = $scope.mapOptions;

  	$scope.mapOptions = {
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

	$http.get('/api/checkin/checkinById', {params: {checkinId: $stateParams.checkinId}}).
	success(function(data, status, headers, config) {

		$scope.what = data.Note;
		$scope.where = data.Doing;

		$scope.myMap.setCenter(new google.maps.LatLng(data.Location.latitude, data.Location.longitude));

	}).
	error(function(data, status, headers, config) {

		// TODO handle the error scenarios

	});


	$scope.toggleDD = function() {
		$scope.status.isopen = !$scope.status.isopen;
	};

	$scope.setChoiceIndex = function(index) {
		alert(index);
	};
	 

	// Ability to add (note that this should only be set if logged in)

	$http.get('/api/trip/get/kevinbluer', {}).
    		success(function(data, status, headers, config) {

    			// TODO - relocation to trip page

    			$scope.status = {
				    isopen: true
				  };

    			$scope.trips = data;

    		}).
    		error(function(data, status, headers, config) {

    			// TODO handle the error scenarios

    		});

  });
