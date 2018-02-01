(function(){
var search = angular.module("search");
search.service("searchSvc",['$http', '$sce', function($http, $sce){
  var self = this;
  self.getMovies = function(keywords){
        var url = "https://api.themoviedb.org/3/search/movie?api_key=78465ae3e2b1eba2963371fdc9867933";
        var movieData = $http.get(url, {
          params:{
            language: "en-US",
            query: keywords,
            page: '1',
            include_adult: 'false'
          }
        });
        var searchResponse = movieData.then(function(response){
          console.log(url);
          console.log(response);
          return response.data;
        }, function(reason){
          self.error = reason.data;
        });
        return searchResponse;
  }

}]);
})();
