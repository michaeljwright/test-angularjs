app = angular.module('infiniteScrollSite', ['infinite-scroll']);

app.constant('settings', {
  'api' : 'http://touchreel.com/feed.php?s=%search%&jsonp=JSON_CALLBACK'
});


app.factory('Loader', ['$http', 'settings', function($http, settings) {
  function Loader(){
    this.items = [];
    this.search = '';
    this.busy = false;
  }
  Loader.prototype.nextPage = function(search){
    
    var self = this;
    this.search = search || this.search || '';
    if (this.busy){
        return;
    }
    this.busy = true;

    var url = settings.api.replace('%search%', this.search);
    return $http.jsonp(url).success(function (result) {
      angular.forEach(result.data, function (item){
        self.items.push(item);
      });
      self.busy = false;
    });

  }

  return Loader;
}]);

app.controller('RemoteDemoController', ["$scope", "$rootScope","Loader", function($scope, $rootScope, Loader) {
  $scope.loader = new Loader;

  $scope.itemsRefresh = function(){
    $scope.loader.items = [];
  };

  $rootScope.find = function(){
    $scope.itemsRefresh();
    $scope.loader.nextPage($rootScope.search);
  };

  $scope.nextPage = function () {
    if(!$scope.paused()){
      $scope.loader.nextPage();
    }
  };

  $scope.paused = function () {
    return $scope.loader.busy || $scope.loader.items.length >= 1000
  };
}]);

