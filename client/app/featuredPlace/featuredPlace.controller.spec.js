'use strict';

describe('Controller: FeaturedPlaceCtrl', function () {

  // load the controller's module
  beforeEach(module('flocateApp'));

  var FeaturedPlaceCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeaturedPlaceCtrl = $controller('FeaturedPlaceCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
