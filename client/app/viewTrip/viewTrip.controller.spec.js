'use strict';

describe('Controller: ViewtripCtrl', function () {

  // load the controller's module
  beforeEach(module('flocateApp'));

  var ViewtripCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewtripCtrl = $controller('ViewtripCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
