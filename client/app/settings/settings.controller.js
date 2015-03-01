'use strict';

angular.module('flocateApp')
  .controller('SettingsCtrl', function ($scope, Auth) {
  	var user = Auth.getCurrentUser();
    $scope.firstname = user.firstName;
    $scope.lastname = user.lastName;
    $scope.email = user.email;
    $scope.location = user.location;
  });
