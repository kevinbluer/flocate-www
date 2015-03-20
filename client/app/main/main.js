'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  })
  .config(function ($stateProvider) {
    $stateProvider
      .state('maps', {
        url: '/maps',
        templateUrl: 'app/main/maps.html',
        controller: 'AboutCtrl'
      });
  });