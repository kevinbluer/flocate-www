'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addTrip', {
        url: '/:username/trip/add',
        templateUrl: 'app/addTrip/addTrip.html',
        controller: 'AddtripCtrl',
        authenticate: true
      });
  });