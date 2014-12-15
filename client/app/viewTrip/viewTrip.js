'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('viewTrip', {
        url: '/viewTrip',
        templateUrl: 'app/viewTrip/viewTrip.html',
        controller: 'ViewtripCtrl'
      });
  });