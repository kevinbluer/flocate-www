'use strict';

angular.module('flocateApp')
  .controller('AddCtrl', function ($scope, $location, $rootScope) {

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

		debugger;

		alert($scope.what);

	}

});
