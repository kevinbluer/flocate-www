'use strict';

angular.module('flocateApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $rootScope) {

    if (Auth.isLoggedIn()) {
    
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
       },
       {
        'link': '/settings',
        'icon': 'fa fa-cog'
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
        'title': 'Explore',
        'link': '/featured'
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

    $scope.signInOut = function() {

      // TODO refactor

      if (this.signin.title == "Sign In") {
        $location.path('/signin');
      } else {
        Auth.logout();
        $location.path('/signin');
      }
    }
  });