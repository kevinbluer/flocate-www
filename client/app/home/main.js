'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/home/main.html',
        controller: 'MainCtrl'
      });
  })
  .config(function ($stateProvider) {
    $stateProvider
      .state('maps', {
        url: '/maps',
        templateUrl: 'app/home/maps.html',
        controller: 'AboutCtrl'
      });
  });