var app = angular.module('myApp',[]);
app.controller('DirectiveController',['$scope','$sce',function ($scope,$sce) {
    $scope.doSubmit=function(){
        console.log($scope.user);
    };
}]);

