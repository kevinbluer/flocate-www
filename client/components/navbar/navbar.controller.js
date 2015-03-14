'use strict';

angular.module('flocateApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $rootScope) {

    if (Auth.isLoggedIn()) {
    
      var username = Auth.getCurrentUser().username;

      $scope.menu = [
      {
        'title': 'Dashboard',
        'link': '/dashboard',
        'icon': 'fa fa-dashboard'
       },
      {
        'title': 'Your Map',
        'link': '/user/' + username,
        'icon': 'fa fa-globe'
       },
      {
        'title': 'Starred',
        'link': '/' + username + '/starred',
        'icon': 'fa fa-star'
       },
       {
        'title': 'Add Pin',
        'link': '/add',
        'icon': 'fa fa-map-marker'
       },
       {
        'title': 'Add Trip',
        'link': '/' + username + '/trip/add',
        'icon': 'fa fa-compass'
       },
       {
        'title': 'Settings',
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
       },
      {
        'title': 'About',
        'link': '/about'
       }];

       $scope.signin = {
        'title': "Sign In",
        'link': '/signin'
       };

       $scope.register = {
        'title': "Register",
        'link': '/register'
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