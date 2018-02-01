(function() {
  var home = angular.module("home");
  home.controller("homeCtrl", function
  homeCtrl($routeParams, $location) {
    var self = this;
    // self.movieDetail;
    // movieDataSvc.getMovieInfo($routeParams.movieId)
    //     .then(function(data) {
    //       //always use self in function callbacks
    //       self.movieDetail = data;
    //       self.backgroundUrl = "https://image.tmdb.org/t/p/w1280/" + self.movieDetail.backdrop_path;
    //     });
    // console.log(self.movieDetail);

  });
})();
