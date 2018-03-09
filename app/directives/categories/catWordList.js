angular.module('CatWordList',[])
    .directive('catWordList', function () {
        return{
            templateUrl: 'app/directives/categories/catWordList.html',
            controller: function($scope, $http) {
                $http.get('app/directives/categories/catWordList.json')
                    .then(function(response){
                        $scope.catWordList = response;
                    });
                console.log($scope.catWordList);
            }
        }
});