'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('viewTrip', {
        url: '/user/:username/trip/:tripId',
        templateUrl: 'app/viewTrip/viewTrip.html',
        controller: 'ViewtripCtrl'
      });
  })

  .config(function ($stateProvider) {
    $stateProvider
      .state('editTrip', {
        url: '/user/:username/trip/:tripId/edit',
        templateUrl: 'app/viewTrip/editTrip.html',
        controller: 'EditTripCtrl'
      });
  });