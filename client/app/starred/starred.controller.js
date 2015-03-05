'use strict';

angular.module('flocateApp')
  .controller('StarredCtrl', function ($scope, $http) {

	$http.get('/api/checkin/getStarredCheckins', {}).
      success(function(data, status, headers, config) {

        $scope.moment = moment;
        $scope.starred = data;

      }).
      error(function(data, status, headers, config) {

        // TODO handle the error scenarios

     });

  });
