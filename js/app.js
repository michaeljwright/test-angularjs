app = angular.module('infiniteScrollSite', ['infinite-scroll']);

app.factory('Loader', ['$http', function($http) {
  function Loader(){
    this.items = [];
    this.busy = false;
    this.after = "";
  }
  Loader.prototype.nextPage = function(search){
    
    var self = this;
    this.search = search || this.search || '';
    if (this.busy){
        return;
    }
    this.busy = 1;

    var url = "http://touchreel.com/feed.php?s=" + this.search + "&jsonp=JSON_CALLBACK";
    return $http.jsonp(url).success(function (result) {
      debugger
      angular.forEach(result.data, function (item){
        self.items.push(item);
      });
      self.after = self.items[self.items.length - 1].id;
      self.busy = !1;
    });

  }

  return Loader;
}]);

app.controller('RemoteDemoController', ["$scope", "$rootScope","Loader", function($scope, $rootScope, Loader) {
  $scope.reddit = new Loader;

  $scope.itemsRefresh = function(){
    $scope.reddit.items = [];
  };

  $rootScope.find = function(){
    $scope.itemsRefresh();
    $scope.reddit.nextPage($rootScope.search);
  };

  $scope.nextPage = function () {
    return $scope.paused() ? void 0 : $scope.reddit.nextPage()
  };

  $scope.paused = function () {
    return $scope.reddit.busy || $scope.reddit.items.length >= 1e3
  };
}]);

