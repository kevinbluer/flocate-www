'use strict';

angular.module('flocateApp')
  .controller('NavbarCtrl', function ($scope, $location, $rootScope) {

    if ($rootScope.user) {
    
      $scope.menu = [{
        'title': 'Home',
        'link': '/'
      },
      {
        'title': 'Dashboard',
        'link': '/dashboard'
       },
      {
        'title': 'Map',
        'link': '/user/kevinbluer'
       },
       {
        'title': '+',
        'link': '/add'
       }];

    } else {
      
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

    }

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });