var bf = angular.module('BasicFunctionality', []);

bf.directive('basicFunctionality', function() {
  return {
    templateUrl: 'app/directives/basic-functionality/basic-functionality.html',
    controller: function($scope) {
      $scope.test = "test from basic functionality directive";
    }
  }
})
