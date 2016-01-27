'use strict';

describe('Controller: SimonCtrl', function () {

  // load the controller's module
  beforeEach(module('simonApp'));

  var SimonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SimonCtrl = $controller('SimonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SimonCtrl.awesomeThings.length).toBe(3);
  });
});
