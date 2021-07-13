var app = angular.module('myApp',[]);

app.controller('FilterController',['$scope','$filter',function ($scope,$filter) {
    $scope.initMemberArr = [
        {
            id:12,
            name:'张一',
            age:20,
        },
        {
            id:23,
            name:'张二',
            age:31,
        },
        {
            id:34,
            name:'李三',
            age:12,
        },
        {
            id:45,
            name:'张五',
            age:33,
        },
        {
            id:56,
            name:'李六',
            age:24,
        }
    ];
}])