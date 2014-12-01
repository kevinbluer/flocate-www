'use strict';

angular.module('flocateApp')
  .controller('AddtripCtrl', function ($scope, $http) {
    $scope.add = function() {

    	$http.post('/api/trip/add', {name: $scope.name, description: $scope.description}).
    		success(function(data, status, headers, config) {

    			// TODO - relocation to trip page

    			$location.path('/dashboard');

    		}).
    		error(function(data, status, headers, config) {

    			// TODO handle the error scenarios

    		});
    };
 });