'use strict';

angular.module('flocateApp')
  .controller('AddCtrl', function ($scope, $location, $rootScope, $http) {

  	if (!$rootScope.user) {
  		$location.path('/signin');
  	}

  	$scope.user = $rootScope.user;
  	$scope.what = '';
  	$scope.where = '';
  	$scope.lat = '';
  	$scope.lng = '';
  	$scope.dt = new Date();

    $scope.today = function() {
	    $scope.dt = new Date();
	};

	$scope.add = function() {

		$http.post('/api/checkin', {user: $scope.user, what: $scope.what}).
    		success(function(data, status, headers, config) {

    			// TODO redirect to place page

    			// temp
    			$location.path('/dashboard');

    		}).
    		error(function(data, status, headers, config) {

    			// TODO handle the error scenarios

    		});

	}

});
