var app = angular.module('myApp',[]);

app.controller('FirstController',['$scope',function ($scope) {
    $scope.show = function(e){
        console.log(e);
        console.log(e.target);
    }
}]);


