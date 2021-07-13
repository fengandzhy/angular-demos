var app = angular.module('myApp',[]);

app.controller('DirectiveController',['$scope','$timeout',function ($scope,$timeout) {
    $scope.flag = false;
    $scope.doChange = ()=>{
        $scope.flag = !$scope.flag;
    }
    console.log($scope.score);
}]);