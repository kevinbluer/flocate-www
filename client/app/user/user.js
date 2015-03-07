'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/user/:username',
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl'
      });
  })

  .config(function ($stateProvider) {
    $stateProvider
      .state('userPublic', {
        url: '/user/:username/public',
        templateUrl: 'app/user/user-public.html',
        controller: 'UserPublicCtrl'
      });
  });