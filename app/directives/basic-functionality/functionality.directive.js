var bf = angular.module('BasicFunctionality', []);

bf.directive('basicFunctionality', function() {
  return {
    templateUrl: 'app/directives/basic-functionality/basic-functionality.html',
    controller: function($scope, DataService, SharedPropertiesService) {

      // This grabs the buzzwords from the main JSON file.
      // In here only as an example, doesnt need to be used in this directive at all
      DataService.loadBuzzwords()
        .then(function(response) {
          $scope.allBuzzwords = response.data;
        });
      $scope.test = "test from basic functionality directive";
      $scope.selectedWords = SharedPropertiesService.getWords();
      $scope.output = "";


      $scope.checkWords = function() {
        if($scope.selectedWords.length > 0) {
          for(var i = 0; i < $scope.selectedWords.length; i++)
            $scope.output = $scope.output + " " + $scope.selectedWords[i];
        } else {
          $scope.output = "Select words below to create something special..."
        }
      }

      $scope.checkWords();
    }
  }
});
