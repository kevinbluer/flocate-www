'use strict';

describe('Controller: StarredCtrl', function () {

  // load the controller's module
  beforeEach(module('flocateApp'));

  var StarredCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StarredCtrl = $controller('StarredCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
