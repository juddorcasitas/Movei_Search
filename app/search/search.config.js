(function(){
var search = angular.module("search");
search.config(function($httpProvider){
  $httpProvider.interceptors.push(function(){
    return{
        request: function(config){
        config.headers['Authorization'] = 'Basic 78465ae3e2b1eba2963371fdc9867933';
        config.headers['Accept'] = 'application/json';
        return config;
      }
    };
  });
});

})();
