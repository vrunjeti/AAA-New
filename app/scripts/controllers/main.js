'use strict';

/**
 * @ngdoc function
 * @name aaaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aaaApp
 */
angular.module('aaaApp')
  .controller('MainCtrl', function ($http) {
    var vm = this;

    $http
      .get('./data/events.json')
      .success(function(data){
        vm.events = data;
      });

    $http
      .get('./data/board.json')
      .success(function(data){
        vm.board = data;
      });

    $http
      .get('./data/about.json')
      .success(function(data){
        vm.about = data;
      });

    $http
      .get('./data/fs.json')
      .success(function(data){
        vm.fs = data;
      });

    $http
      .get('./data/annual_events.json')
      .success(function(data){
        vm.annualEvents = data;
      });

    vm.hasForm = function(event){
      return !(event.form === "");
    }

  });
