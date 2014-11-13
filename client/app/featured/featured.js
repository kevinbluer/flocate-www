'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('featured', {
        url: '/featured',
        templateUrl: 'app/featured/featured.html',
        controller: 'FeaturedCtrl'
      });
  });