var app = angular.module('myApp',[]);
app.controller('FirstController',['$scope',function ($scope) {
    $scope.username='李四';
    $scope.age=20;
    $scope.base='Auckland';
}]);

app.controller('SecondController',['$scope',function ($scope) {
    $scope.username='张三';
    $scope.age=21;
    $scope.man='Hamilton';
}]);

app.controller('ThirdController',['$scope',function ($scope) {
    $scope.username='王二';
    $scope.age=22;
}]);