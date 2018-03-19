var wordList = angular.module('CatWordList',[]);

wordList.directive('catWordList', function () {
    return{
        templateUrl: 'app/directives/categories/catWordList.html',
        controller: function($scope, $http) {
            console.log('inside function for cat word list');
            $http.get('app/data/buzzwords.json')
                .then(function(response){
                    $scope.wordList = response.data.words;
                    $scope.categories = response.data.categories;

                    console.log($scope.wordList);
                    console.log($scope.categories);
                });
        }
    }
});