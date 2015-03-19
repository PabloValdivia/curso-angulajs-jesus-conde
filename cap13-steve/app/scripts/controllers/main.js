'use strict';

/**
 * @ngdoc function
 * @name cap13SteveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cap13SteveApp
 */
angular.module('cap13SteveApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'E2E',
      'Protractor'
    ];
  });
