'use strict';

describe('Controller: FeaturedCtrl', function () {

  // load the controller's module
  beforeEach(module('flocateApp'));

  var FeaturedCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeaturedCtrl = $controller('FeaturedCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
