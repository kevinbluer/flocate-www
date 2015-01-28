'use strict';

angular.module('flocateApp')
  .controller('DashboardCtrl', function ($scope, $location, Auth, User, $rootScope, $http) {

    var user = Auth.getCurrentUser();

    $scope.currentUser = user;

    user.$promise.then(function(user) {
      
      var been = {
          fillKey: 'MEDIUM',
          numberOfThings: 10381
      };

      var places = {};

      angular.forEach(user.CountryListCode, function(value, key) {

        places[value] = been;

      });

      var map = new Datamap({
        element: document.getElementById('container'),
        fills: {
                HIGH: '#afafaf',
                LOW: '#AFE549',
                MEDIUM: '#417503',
                UNKNOWN: 'rgb(0,0,0)',
                defaultFill: '#7BBF37'
            },
        data: places
      });
    });
		
		$http.get('/api/checkin/allCheckins', {}).
  		success(function(data, status, headers, config) {

  			// TODO - relocation to trip page

  			$scope.checkins = data;

  		}).
  		error(function(data, status, headers, config) {

  			// TODO handle the error scenarios

  		});

      $http.get('/api/trip/get/kevinbluer', {}).
      success(function(data, status, headers, config) {

        // TODO - relocation to trip page

        $scope.trips = data;

      }).
      error(function(data, status, headers, config) {

        // TODO handle the error scenarios

      });

  });
