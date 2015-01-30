'use strict';

angular.module('flocateApp')
  .controller('ViewcheckinCtrl', function ($scope, $http, $stateParams, $log, $location) {

  	$scope.moment = moment;

  	$scope.checkin = {};

  	var mapOptions = $scope.mapOptions;

  	$scope.mapOptions = {
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

	$http.get('/api/checkin/checkinById', {params: {checkinId: $stateParams.checkinId}}).
	success(function(data, status, headers, config) {

		$scope.checkin = data;

		$scope.what = data.Note;
		$scope.where = data.Doing;
		$scope.when = moment(data.RecordedAt.iso).fromNow();

		if (data.Starred) {
			$scope.starred = "btn-checked";
		}

		$scope.myMap.setCenter(new google.maps.LatLng(data.Location.latitude, data.Location.longitude));

	}).
	error(function(data, status, headers, config) {

		// TODO handle the error scenarios

	});

	$scope.toggleStar = function() {

		$http.post('/api/checkin/star', {checkinId: $stateParams.checkinId}).
			success(function(data, status, headers, config) {

				// TEMP

				console.log(data);

			}).
			error(function(data, status, headers, config) {

				// TODO handle the error scenarios

			});

	}


	$scope.toggleDD = function() {
		$scope.status.isopen = !$scope.status.isopen;
	};

	$scope.setChoiceIndex = function(tripId) {
	

		// add the current checkin to the trip (tripId)

		$http.post('/api/trip/addCheckinToTrip', {tripId: tripId, checkinId: $scope.checkin.objectId}).
			success(function(data, status, headers, config) {

				// relocation to trip page
				$location.path('/user/kevinbluer/trip/' + data.objectId);
				

			}).
			error(function(data, status, headers, config) {

				// TODO handle the error scenarios

			});

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
