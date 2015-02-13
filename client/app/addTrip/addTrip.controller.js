'use strict';

angular.module('flocateApp')
  .controller('AddtripCtrl', function ($scope, $http, $location, Auth) {
    $scope.add = function() {

    	$http.post('/api/trip/add', {name: $scope.name, description: $scope.description}).
    		success(function(data, status, headers, config) {

    			// TODO - relocation to trip page

                debugger;

    			$location.path('/user/kevinbluer/trip/m6HflMhOVe');

    		}).
    		error(function(data, status, headers, config) {

    			// TODO handle the error scenarios

    		});
    };
 });