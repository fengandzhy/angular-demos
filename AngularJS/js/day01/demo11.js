var app = angular.module('myApp',[]);
app.controller('FatherCtr1',['$scope',function($scope){
    $scope.name='father';
    $scope.div1=function(){
        console.log('div1');
    }
    $scope.div2=function () {
        console.log('div2');
    }
}]);