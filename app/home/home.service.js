(function(){
var home = angular.module("home");
home.service("homeService", function($http, $sce){
  var self = this;
  // self.getMovieInfo = function(movieId){
  //   var url = "https://api.themoviedb.org/3/movie/" + movieId +"?api_key=78465ae3e2b1eba2963371fdc9867933";
  //   var trustedUrl = $sce.trustAsResourceUrl(url);
  //   var movieData = $http.jsonp(trustedUrl, {jsonpCallbackParam: 'callback'});
  //   var Response = movieData.then(function(response){
  //     console.log(response);
  //     return response.data;
  //   });
  //   return Response;
  // }
});
})();
