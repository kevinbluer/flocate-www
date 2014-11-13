'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/user/:username',
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl'
      });
  });