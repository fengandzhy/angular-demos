var app = angular.module('myApp',[]);

app.controller('DirectiveController',['$scope','$sce',function ($scope,$sce) {
    $scope.html = $sce.trustAsHtml('<span>我是html元素</span>');
    $scope.str="我是字符串";
}]);