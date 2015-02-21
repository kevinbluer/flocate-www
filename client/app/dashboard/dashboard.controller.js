'use strict';

angular.module('flocateApp')
  .controller('DashboardCtrl', function ($scope, $location, Auth, User, $rootScope, $http) {

    var user = Auth.getCurrentUser();

    debugger;

    $scope.currentUser = user;

    user.$promise.then(function(user) {
      
      var been = {
          fillKey: 'MEDIUM',
          numberOfThings: 10381
      };

      var places = {};

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

    // generate random slogan
    var slogans = ["Nice work!", "Go you!", "Keep it up!", "The more you see, the more you know!", "Explorer Extraordinaire!"];
    var rand = Math.random();
    rand *= slogans.length;
    rand = Math.floor(rand);
    $scope.caption = slogans[rand];
		
		$http.get('/api/checkin/allCheckins', {}).
  		success(function(data, status, headers, config) {

        $scope.moment = moment;
  			$scope.checkins = data;

  		}).
  		error(function(data, status, headers, config) {

  			// TODO handle the error scenarios

  		});

      $http.get('/api/trip/get/kevinbluer', {}).
      success(function(data, status, headers, config) {

        $scope.moment = moment;
        $scope.trips = data;

      }).
      error(function(data, status, headers, config) {

        // TODO handle the error scenarios

      });

  });
