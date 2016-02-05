'use strict';

angular.module('core')
.controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus',
  function ($scope, $state, Authentication, Menus) {
    // if we are on the home screen hide the logo in the top left
    $scope.hideLogo = true;

    $scope.authentication = Authentication;
  }
]);
