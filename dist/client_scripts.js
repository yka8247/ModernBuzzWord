angular.module('modernBuzzwordApp', [
  'ui.router',
  'routing'
]);

var homeController = angular.module('modernBuzzwordApp');

homeController.controller('HomeController', function($scope) {
  $scope.data = "TEST from home.controller.js";
})

var routing = angular.module('routing', []);

routing.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'HomeController',
      templateUrl: 'app/views/home.html'
    });
});
