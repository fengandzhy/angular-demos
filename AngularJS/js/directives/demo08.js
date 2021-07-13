var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){
    $scope.data = {
        name:'zhangsan',
        age: 18
    }
}]);
/**
 * = 用于传递各类数据，字符串，对象，数组等等，而且是双向绑定，即不管修改父还是子，这份数据都会被修改
 *
 *
 * */
app.directive('echo',function(){
    return{
        restrict:'ECAM',
        scope: {
            data:'=myNum'
        },
        template:'<ul>' +
            '<li ng-bind="data.name"></li>' +
            '<li ng-bind="data.age"></li>'+
            '</ul>',
        replace:true
    }
});