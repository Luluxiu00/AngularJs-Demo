var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.firstname = "Jack";
  $scope.lastname = "Brance";
  $scope.fullname = function(){
    return $scope.firstname + " " + $scope.lastname;
  }
});
