var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){
    $scope.sayName=function(name){
        console.log(name);
    }
    $scope.hello=function(name){
        console.log('hello '+name);
    }
}]);
/**
 * & 用于传递父作用域中声明的方法，也就是通过&我们可以在指令中直接使用父的方法
 * 页面中通过say-hello 来绑定这个父scope里的hello方法 在这里又通过sayHello 绑定到了子scope里的 hello 方法上
 *
 * */
app.directive('echo',function(){
    return{
        restrict:'ECAM',
        scope: {
            myName:'&',
            hello:'&sayHello'
        },
        template:'<div><button ng-click="myName()">点我</button><button ng-click="hello()">再试试</button></div>',
        replace:true
    }
});