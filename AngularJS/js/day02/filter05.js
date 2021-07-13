var app = angular.module('myApp',[]);

app.controller('JsonController',['$scope','$filter',function ($scope,$filter) {
    $scope.customer = {
        "name" : "Alfreds Futterkiste",
        "city" : "Berlin",
        "country" : "Germany"
    };
}])