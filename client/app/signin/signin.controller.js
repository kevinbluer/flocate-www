'use strict';

angular.module('flocateApp')
  .controller('SigninCtrl', function ($scope, $http, Auth, $rootScope, $location) {
    $scope.signin = function() {

        // if(form.$valid) {
            Auth.login({
              username: $scope.username,
              password: $scope.password
            })
            .then( function() {
              // Logged in, redirect to home

              debugger;

              $location.path('/dashboard');
            })
            .catch( function(err) {
              $scope.errors.other = err.message;
            });
          //}

    	// $http.post('/auth/local', {username: $scope.username, password: $scope.password}).
    	// 	success(function(data, status, headers, config) {
    			
     //            debugger;

    	// 		// set the user
    	// 		$rootScope.user = data;

    	// 		// redirect to the dashboard
    	// 		$location.path('/dashboard');

    	// 	}).
    	// 	error(function(data, status, headers, config) {

    	// 		// TODO handle the error scenarios

    	// 	});

    }
});
