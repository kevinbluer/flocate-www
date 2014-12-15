'use strict';

angular.module('flocateApp')
  .controller('ViewtripCtrl', function($scope, $http, $stateParams) {

  	$http.get('/api/trip/' + $stateParams.tripId).
	success(function(data, status, headers, config) {

		$scope.name = data.Name;
		$scope.description = data.Description;

	}).
	error(function(data, status, headers, config) {

		console.log(data);

		// TODO handle the error scenarios

	});

  });
