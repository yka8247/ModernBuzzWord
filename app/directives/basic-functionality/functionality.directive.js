var bf = angular.module('BasicFunctionality', []);

bf.directive('basicFunctionality', function() {
  return {
    templateUrl: 'app/directives/basic-functionality/basic-functionality.html',
    controller: function($scope, DataService, SharedPropertiesService) {

      $scope.test = "test from basic functionality directive";
      $scope.selectedWords = SharedPropertiesService.getWords();
      $scope.output = SharedPropertiesService.getWords();

      $scope.makeRandomWords = function() {
          DataService.loadBuzzwords()
            .then(function(response) {
                var allwords = [];
                var data = response.data.words;
                for(var i = 0; i < data.length; i++)
                    allwords.push(data[i].word);
                $scope.output = _.sampleSize(allwords, 3);
            });
      }

      $scope.checkWords = function(currWord) {
        if($scope.output.split().length > 3) {
            if ($scope.output === "Select words below to create something special..." && currWord !== undefined) {
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
          SharedPropertiesService.resetWords();
          $scope.output = SharedPropertiesService.getWords();
      };
    }
  }
});
