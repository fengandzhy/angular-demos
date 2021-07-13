var app = angular.module('myApp',[]);
app.controller('CalculatorController',['$scope',function ($scope) {
    $scope.calculate = function () {
        switch ($scope.flag) {
            case '加':
                $scope.result = $scope.num1*1+$scope.num2*1;
                break;
            case '减':
                $scope.result = $scope.num1-$scope.num2;
                break;
            case '乘':
                $scope.result = $scope.num1*$scope.num2;
                break;
            case '除':
                $scope.result = $scope.num1/$scope.num2;
                break;
        }
    }
}])