'use strict';

angular.module('flocateApp')
  .controller('SigninCtrl', function ($scope, $http, Auth, $rootScope, $location) {
    $scope.signin = function() {

        Parse.User.logIn($scope.username, $scope.password, {
          success: function(user) {

            $rootScope.$apply(function() {

              $location.path('/dashboard');
              
            });
          },
          error: function(user, error) {

            // TODO - Properly handle this error

          }
        });

    }
});
