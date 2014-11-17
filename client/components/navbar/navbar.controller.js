'use strict';

angular.module('flocateApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, 
    {
      'title': 'Map',
      'link': '/map'
    },
    {
      'title': 'Featured',
      'link': '/featured'
     },
     {
      'title': 'Users',
      'link': '/user/'
     },
     {
      'title': 'Add',
      'link': '/add'
     }
     ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });