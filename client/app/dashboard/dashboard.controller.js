'use strict';

angular.module('flocateApp')
  .controller('DashboardCtrl', function ($scope, $location, $http) {

    // get the current parse user
    var user = Parse.User.current();

    // build out the choropleth
    var been = {
        fillKey: 'MEDIUM',
        numberOfThings: 10381
    };

    var places = {};

    angular.forEach(user.get("CountryList"), function(value, key) {
      places[value.CountryCode3] = been;
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

    // pass the user through to the view
    $scope.user = user;

    // generate random slogan
    var slogans = ["Nice work", "Go you", "Keep it up", "The more you see, the more you know", "Explorer Extraordinaire"];
    var rand = Math.random();
    rand *= slogans.length;
    rand = Math.floor(rand);
    $scope.caption = slogans[rand];

    // get the most recent places
    var Checkin = Parse.Object.extend("Checkin");
    var query = new Parse.Query(Checkin);
    query.equalTo("User", Parse.User.current());
    query.descending("RecordedAt");
    query.limit(3);
    query.find({
      success: function(results) {

          $scope.$apply(function() {
            $scope.moment = moment;
            $scope.checkins = results;
          });
        },
        error: function(error) {
          
        }
    });

    var Trip = Parse.Object.extend("Trip");
    var queryTrip = new Parse.Query(Trip);
    queryTrip.equalTo("User", Parse.User.current());
    queryTrip.descending("updatedAt");
    queryTrip.find({
      success: function(results) {

          $scope.$apply(function() {
            $scope.moment = moment;
            $scope.trips = results;
          });
        },
        error: function(error) {
          
        }
    });    

		// $http.get('/api/checkin/allCheckins', {}).
  // 		success(function(data, status, headers, config) {

  //       $scope.moment = moment;
  // 			$scope.checkins = data;

  // 		}).
  // 		error(function(data, status, headers, config) {

  // 			// TODO handle the error scenarios

  // 		});

  //     $http.get('/api/trip/get/kevinbluer', {}).
  //     success(function(data, status, headers, config) {

  //       $scope.moment = moment;
  //       $scope.trips = data;

  //     }).
  //     error(function(data, status, headers, config) {

  //       // TODO handle the error scenarios

  //     });

  //     $http.get('/api/checkin/getStarredCheckins/5', {}).
  //     success(function(data, status, headers, config) {

  //       $scope.moment = moment;
  //       $scope.starred = data;

  //     }).
  //     error(function(data, status, headers, config) {

  //       // TODO handle the error scenarios

  //     });

  });
