var app = angular.module('myApp',[]);

app.controller('DirectiveController',['$scope','$timeout',function ($scope,$timeout) {

}]);
/**
 * priority值为数字，表示指令的优先级，若一个DOM上存在多个指令时，优先级高的指令先执行，注意此属性只在指令作为DOM属性时起作用
 * */
app.directive('echo', function() {
    return {
        restrict: 'EACM',
        priority: 10,
        controller:function(){
            console.log('我的优先级是10')
        }
    };
});
/**
 * terminal值为布尔值，用于决定优先级低于自己的指令是否还执行，例如上方例子中，我们为demo指令添加terminal:true，可以看到echo指令不会执行
 * */
app.directive('demo', function() {
    return {
        restrict: 'EACM',
        priority: 20,
        terminal:true,
        controller:function(){
            console.log('我的优先级是20')
        }
    };
});

