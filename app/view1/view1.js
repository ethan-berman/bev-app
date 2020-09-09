'use strict';

const api = "http://127.0.0.1:3000/bevs";
const heroku = "https://calculator-comparison-tool.herokuapp.com/bevs/";

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {
  $http.get(api)
      .then(function(response){
        console.log(response.data);
        $scope.greeting = response.data;
      })
});
