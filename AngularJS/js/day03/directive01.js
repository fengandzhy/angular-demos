var app = angular.module('myApp',[]);

app.controller('DirectiveController',['$scope','$timeout',function ($scope,$timeout) {
    $timeout(()=>{
        $scope.url='http://www.baidu.com';
    },3000);
    $scope.readonly = true;
    $scope.doReadyOnly = ()=>{
        $scope.readonly = !$scope.readonly;
    }

    $scope.cls = 'red';
    $scope.doClass = ()=>{
        if($scope.cls == 'red'){
            $scope.cls = 'blue';
            return;
        }

        if($scope.cls == 'blue'){
            $scope.cls = 'red';
            return;
        }
    }

}]);

