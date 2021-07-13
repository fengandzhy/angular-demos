var app = angular.module('myApp',[]);

app.controller('DirectiveController',['$scope','$timeout',function ($scope,$timeout) {

}]);


/**
 * 当 scope:flase 时，表示指令不创建额外的作用域，默认继承使用父级作用域，所以指令中能正常使用和修改父级中所有变量和方法
 *
 * */
app.directive('echo',[function(){
    return {
        scope: false,
        template: '<div>我是子：<input type="text" ng-model="num"><div>',
        replace: true
    }
}]);

/**
 * 当 scope:true 时表示指令创建自己的作用域，但仍然会继承父作用域，说直白点就是，
指令自己有的用自己的，没有的找父级拿，同一份数据父级能影响指令，但指令却无法反向影响父级，这就是继承但隔离
 */
app.directive('echo1',[function(){
    return {
        scope: true,
        template: '<div>我是子：<input type="text" ng-model="num1"><div>',
        replace: true
    }
}]);

