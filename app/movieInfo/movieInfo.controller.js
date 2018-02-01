(function() {
  var movieInfo = angular.module("movieInfo");
  movieInfo.controller("movieInfoCtrl",['movieInfoSvc', '$window', '$stateParams', '$location', function
  movieInfoCtrl(movieInfoSvc, $window, $stateParams, $location) {
    var self = this;
    self.movieDetail;
    var currentWinWidth = $window.innerWidth;
    var currentWinHeight = $window.innerWidth;


    $window.addEventListener("resize", function(event) {
      currentWinWidth = $window.innerWidth;
      currentWinHeight = $window.innerWidth;
    })


    movieInfoSvc.getMovieInfo($stateParams.movieId)
        .then(function(data) {
          self.movieDetail = data;
          self.movieCard = "https://image.tmdb.org/t/p/w185/" + self.movieDetail.poster_path;
          self.onError = "this.onerror=null;this.src='media/default-placeholder.png'";

          //device support
          if(currentWinWidth > 768){
            self.backgroundUrl = "https://image.tmdb.org/t/p/w1280" + self.movieDetail.backdrop_path;
          }else{
            self.backgroundUrl = "https://image.tmdb.org/t/p/w780" + self.movieDetail.backdrop_path;
          }
          self.voteAvg = self.movieDetail.vote_average;
          self.voteCounts = self.movieDetail.vote_counts;
        });
    console.log(self.movieDetail);

  }]);
})();
