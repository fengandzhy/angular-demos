var app = angular.module('myApp',['ngSanitize']);

app.controller('DirectiveController',['$scope','$timeout',function ($scope,$timeout) {
    $scope.html = '<span>我是html元素</span>';
    $scope.str="我是字符串";
}]);