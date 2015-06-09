'use strict';

/**
 * @ngdoc overview
 * @name aaaApp
 * @description
 * # aaaApp
 *
 * Main module of the application.
 */
angular
  .module('aaaApp', [
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/board', {
        templateUrl: 'views/board.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/fs', {
        templateUrl: 'views/fs.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

      // $locationProvider.html5Mode(true);
  });

// jquery stuff
$(document).ready(function(){
  $(".button-collapse").sideNav({edge: 'left'});
  $('.collapsible').collapsible();
});