var app = angular.module('myApp',[]);

app.controller('FirstController',['$scope',function ($scope) {
    $scope.name='张三';
    $scope.show = function(){
        return $scope.name;
    }
}]);

app.controller('SecondController',['$scope',function ($scope) {
    $scope.name='李四';
    $scope.show = function(name){
        console.log(name);
    }
}]);

