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
      $scope.output = "Select words below to create something special...";

      $scope.checkWords = function(currWord) {
          console.log
        if($scope.output.split().length > 3) {
            if ($scope.output === "Select words below to create something special..." && currWord !== undefined) {
                console.log(type(currWord));
                $scope.output = "";
                $scope.output = $scope.output + " " + currWord;
            }
            else{
                $scope.output = "Only Three Allowed... Try Again";
            }
        }
        else if ($scope.output.split().length < 4){
            for (let i = 0; i < $scope.output.split().length; i++) {
                $scope.output = $scope.output + " " + currWord;
            }
        }
      };


      $scope.clearOutput = function(){
          $scope.output = "Select words below to create something special...";
      };

      $scope.checkWords();
    }
  }
});
