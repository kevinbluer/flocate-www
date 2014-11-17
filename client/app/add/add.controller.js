'use strict';

angular.module('flocateApp')
  .controller('AddCtrl', function ($scope) {
    $scope.message = 'Hello';

    $scope.today = function() {
	    $scope.dt = new Date();
	};

	$scope.yo = function() {

		alert($scope.what);

	}

});
