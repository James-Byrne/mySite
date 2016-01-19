'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider',
  function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    // Set the theme of Angular Material with the primary and accent colors
    $mdThemingProvider.theme('default')
    // Setting the default hue to ve used in primary color pallete
    // TODO: Set this to the correct shades of blue & color x?
    .primaryPalette('grey', {
      'default' : '900'
    })
    .accentPalette('green', {
      'default' : '600'
    });

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    // Home state routing
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'modules/core/client/views/home.client.view.html'
    })
    // TODO : Replace the above home with the home dev once completed
    .state('homePageDev', {
      url: '/homedev',
      templateUrl: 'modules/core/client/views/homedev.client.view.html'
    })
    .state('not-found', {
      url: '/not-found',
      templateUrl: 'modules/core/client/views/404.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('bad-request', {
      url: '/bad-request',
      templateUrl: 'modules/core/client/views/400.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('forbidden', {
      url: '/forbidden',
      templateUrl: 'modules/core/client/views/403.client.view.html',
      data: {
        ignoreState: true
      }
    });
  }
]);
