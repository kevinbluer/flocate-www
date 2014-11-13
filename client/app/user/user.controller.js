'use strict';

angular.module('flocateApp')
  .controller('UserCtrl', function ($scope) {
    $scope.message = 'Hello';
  });

function onGoogleReady() {
  angular.bootstrap(document.getElementById("map"), ['app.ui-map']);
}