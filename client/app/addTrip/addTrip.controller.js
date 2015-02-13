'use strict';

angular.module('flocateApp')
  .controller('AddtripCtrl', function ($scope, $http, $location, Auth) {
    $scope.add = function() {

        debugger;

    	$http.post('/api/trip/add', {name: $scope.name, description: $scope.description}).
    		success(function(data, status, headers, config) {

    			// TODO - remove all the hardcodin'

                debugger;

    			$location.path('/user/kevinbluer/trip/' + data.objectId);

    		}).
    		error(function(data, status, headers, config) {

    			// TODO handle the error scenarios

    		});
    };
 });