'use strict';

angular.module('flocateApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Featured',
      'link': '/featured'
     },
     {
      'title': 'Users',
      'link': '/user/'
     }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });