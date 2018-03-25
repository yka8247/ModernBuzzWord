var wordList = angular.module('CatWordList',[]);

wordList.directive('catWordList', function () {
    return{
        templateUrl: 'app/directives/categories/catWordList.html',
        controller: function($scope, DataService, SharedPropertiesService) {
            DataService.loadBuzzwords()
                .then(function(response){
                    $scope.wordList = response.data.words;
                    $scope.categories = response.data.categories;
                });
            $scope.addWord = function(word) {
                SharedPropertiesService.addWord(word);
            };
        }
    }
});
