'use strict';

angular.module('flocateApp')
  .controller('NavbarCtrl', function ($scope, $location, $rootScope) {

    if ($rootScope.user) {
    
      $scope.menu = [
      {
        'title': 'Dashboard',
        'link': '/dashboard',
        'icon': 'fa fa-dashboard'
       },
      {
        'title': 'Your Map',
        'link': '/user/kevinbluer',
        'icon': 'fa fa-globe'
       },
       {
        'title': 'Add Pin',
        'link': '/add',
        'icon': 'fa fa-map-marker'
       },
       {
        'title': 'Add Trip',
        'link': '/kevinbluer/trip/add',
        'icon': 'fa fa-compass'
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