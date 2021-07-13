var app = angular.module('myApp',[]);

app.controller('FilterController',['$scope','$filter',function ($scope,$filter) {

}]);

app.filter('reverse',function () {
    return function(input){
        var arr = input.split('');
        arr.reverse();
        return arr.join('');
    }
});