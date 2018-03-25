var s = angular.module('ModernBuzzwordServices', []);

s.factory('DataService', function($http) {

  var v = {};
  v.loadBuzzwords = function() {
    return $http.get('app/data/buzzwords.json');
  }
  return v;
});

s.factory('SharedPropertiesService', function() {

  var service = {};
  service.selectedWords = [];

  service.getWords = function() {
    return service.selectedWords;
  };

  service.addWord = function(word) {
      if(service.selectedWords.length != 3)
        service.selectedWords.push(word);
  };

  service.resetWords = function() {
    service.selectedWords = [];
  };

  service.removeWord = function(word) {
    var index = service.selectedWords.indexOf(word);
    if(index > -1) {
      service.selectedWords.splice(index, 1);
    }
  };

  return service;
});
