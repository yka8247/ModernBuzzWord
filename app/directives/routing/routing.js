var routing = angular.module('routing', []);

routing.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'HomeController',
      templateUrl: 'app/directives/home/home.html'
    })
    // .state('responsive', {
    //   template: '<basic-functionality></basic-functionality>'
    // });
});
