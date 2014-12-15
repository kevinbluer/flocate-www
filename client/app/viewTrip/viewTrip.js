'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('viewTrip', {
        url: '/user/:username/trip/:tripId',
        templateUrl: 'app/viewTrip/viewTrip.html',
        controller: 'ViewtripCtrl'
      });
  });