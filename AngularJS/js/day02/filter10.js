var app = angular.module('myApp',[]);

app.controller('FilterController',['$scope','$filter',function ($scope,$filter) {
    $scope.price = 55;
    $scope.str= 'gdmm';
}]);

app.directive('div',function () {

});

/**
 * 自定义过滤器
 参数一: 过滤器名称
 参数二: 回调函数
 返回为一个函数(input 为自动传入的数据, input为管道符前面的内容)
 * */
app.filter('skCur',function(){
    return function (input,args,args1){
        return args+input+args1;
    }
});

app.filter('firstUpcase',function(){
    return function(input,args){
        return input[0].toUpperCase()+input.slice(1);
    }
});



