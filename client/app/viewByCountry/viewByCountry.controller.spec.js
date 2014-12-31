'use strict';

describe('Controller: ViewByCountryCtrl', function () {

  // load the controller's module
  beforeEach(module('flocateApp'));

  var ViewByCountryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewByCountryCtrl = $controller('ViewByCountryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
