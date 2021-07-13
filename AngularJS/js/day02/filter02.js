var app = angular.module('myApp',[]);

app.controller('DateFilterController',['$scope','$scope',function ($scope,$filter) {
    $scope.now = new Date();
}])


