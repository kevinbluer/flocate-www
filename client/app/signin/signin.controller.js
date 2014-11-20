'use strict';

angular.module('flocateApp')
  .controller('SigninCtrl', function ($scope, $http, $rootScope, $location) {
    $scope.signin = function() {

    	$http.post('/api/auth', {username: $scope.username, password: $scope.password}).
    		success(function(data, status, headers, config) {
    			
    			// set the user
    			$rootScope.user = data;

    			// redirect to the dashboard
    			$location.path('/dashboard');

    		}).
    		error(function(data, status, headers, config) {

    			// TODO handle the error scenarios

    		});

    }
});
