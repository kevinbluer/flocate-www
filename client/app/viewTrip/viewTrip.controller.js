'use strict';

angular.module('flocateApp')
  .controller('ViewtripCtrl', function($scope, $http, $stateParams) {

  	$http.get('/api/trip/' + $stateParams.tripId).
	success(function(data, status, headers, config) {

		console.log(data);

		$scope.name = data[0].Name;
		$scope.description = data[0].Description;

		$scope.checkins = data[1];

	}).
	error(function(data, status, headers, config) {

		console.log(data);

		// TODO handle the error scenarios

	});

  });
