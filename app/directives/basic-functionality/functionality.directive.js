var bf = angular.module('BasicFunctionality', []);

bf.directive('basicFunctionality', function() {
  return {
    templateUrl: 'app/directives/basic-functionality/basic-functionality.html',
    controller: function($scope, DataService, SharedPropertiesService) {

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

      $scope.clearOutput = function(){
          SharedPropertiesService.resetWords();
          $scope.output = SharedPropertiesService.getWords();
      };
    }
  }
});
