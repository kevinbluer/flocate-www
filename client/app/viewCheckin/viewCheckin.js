'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('viewCheckin', {
        url: '/user/:username/:checkinId',
        templateUrl: 'app/viewCheckin/viewCheckin.html',
        controller: 'ViewCheckinCtrl'
      });
  })
  .config(function ($stateProvider) {
    $stateProvider
      .state('editCheckin', {
        url: '/user/:username/:checkinId/edit',
        templateUrl: 'app/viewCheckin/editCheckin.html',
        controller: 'EditCheckinCtrl'
      });
  })