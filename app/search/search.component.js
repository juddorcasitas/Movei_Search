(function(){
  var search = angular.module("search");
  search.controller("searchCtrl",['searchSvc', '$scope','$timeout', '$location',  function
    searchCtrl(searchSvc, $scope, $timeout, $location) {
    var self = this;
    self.keywords = "";
    self.clickable = true;
    var _timeout;
    var mouseDown = false;

    self.getMovies = function () {
      var callAtTimeout = function(){
        self.movies = [];
        console.log("filtering movies");
        if(self.keywords != "") {
            searchSvc.getMovies(self.keywords)
                .then(function(data) {
                  //always use self in function callbacks
                  self.movies = data.results.slice(0,10);
                });
        }
            _timeout = null;
      };

      if(_timeout){
        $timeout.cancel(_timeout);
      }
      _timeout = $timeout(callAtTimeout, 500);
    }

    this.selectMovie = function(index) {
      this.selectedMovie = this.movies[index];
      self.keywords = "";
      self.movies = undefined;
      $location.path("/movie/" + this.selectedMovie.id).replace();
      console.log("Selected");
    }

    this.mouseDownEv = function(event){
      mouseDown = true;
    }

    this.mouseMoveEv = function(event){
      if(mouseDown){
        self.clickable = true;
      }else {
        self.clickable = false;
      }
    }

    this.mouseUpEv = function(event){
      mouseDown = false;
    }

  }]);

  search.component('searchBar', {
      bindings: {
        search: '='
      },
      templateUrl: '/views/search.html',
      controller: 'searchCtrl',
      //link: function(scope, element, attrs){}
  });
})();
