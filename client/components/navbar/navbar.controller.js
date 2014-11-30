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
        'title': 'Add Location',
        'link': '/add'
       },
       {
        'title': 'Add Trip',
        'link': '/kevinbluer/trip/add'
       }];

       $scope.signin = {
        'title': "Sign Out",
        'link': '/signout'
       };

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

       $scope.signin = {
        'title': "Sign In",
        'link': '/signin'
       };

    }

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });