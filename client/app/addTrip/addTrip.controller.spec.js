'use strict';

describe('Controller: AddtripCtrl', function () {

  // load the controller's module
  beforeEach(module('flocateApp'));

  var AddtripCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddtripCtrl = $controller('AddtripCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
