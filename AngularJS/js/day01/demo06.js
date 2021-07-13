

var app = angular.module('myApp',[]);

app.run(['$rootScope',function ($rootScope) {
    $rootScope.name='王二';
    $rootScope.username='老二';
}])

app.controller('FirstController',['$scope',function ($scope) {
    $scope.name='张三';
    $scope.username='老大';
}]);

app.controller('SecondController',['$scope',function ($scope) {
    $scope.name='李四';
}]);




