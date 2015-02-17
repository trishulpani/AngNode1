'use strict';

/**
 * @ngdoc overview
 * @name angNodeApp
 * @description
 * # angNodeApp
 *
 * Main module of the application.
 */
angular
  .module('angNodeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      }).when('/search/:movie',{
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
