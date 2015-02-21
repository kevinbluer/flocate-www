'use strict';

angular.module('flocateApp')
  .controller('AddtripCtrl', function ($scope, $http, $location, Auth) {
    $scope.add = function() {

    	$http.post('/api/trip/add', {name: $scope.name, description: $scope.description}).
    		success(function(data, status, headers, config) {

    			var username = Auth.getCurrentUser().username;

    			$location.path('/user/' + username + '/trip/' + data.objectId);

    		}).
    		error(function(data, status, headers, config) {

    			// TODO handle the error scenarios

    		});
    };
 });