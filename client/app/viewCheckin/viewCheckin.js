'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('viewCheckin', {
        url: '/user/:username/:checkinId',
        templateUrl: 'app/viewCheckin/viewCheckin.html',
        controller: 'ViewcheckinCtrl'
      });
  });