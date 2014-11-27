'use strict';

describe('Controller: ViewcheckinCtrl', function () {

  // load the controller's module
  beforeEach(module('flocateApp'));

  var ViewcheckinCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewcheckinCtrl = $controller('ViewcheckinCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
