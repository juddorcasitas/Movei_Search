var app = angular.module("app",['search', 'movieInfo', 'home', 'ui.router']);
(function(){
app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
      url: "/",
      templateUrl: '/views/main.html',
      controller: 'homeCtrl',
      controllerAs: 'hCtrl'
    })
    .state('movieDetail', {
      url: "/movie/:movieId",
      templateUrl: '/views/movieInfo.html',
      controller: 'movieInfoCtrl',
      controllerAs: 'mCtrl'
    });
    $urlRouterProvider.otherwise("/");
});

})();
