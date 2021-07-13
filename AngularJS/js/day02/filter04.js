var app = angular.module('myApp',[]);

app.controller('LimitToController',['$scope','$filter',function ($scope,$filter) {
    $scope.str = "Hello World!";
}])
