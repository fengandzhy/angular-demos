
/**
 * angular.module 定义一个app
 * */
var app = angular.module('myApp',[]);
/**
 * 给该app 定义一个controller
 * */
app.controller('myController',['$scope',function ($scope) {
    $scope.name='zhouhy';
}])