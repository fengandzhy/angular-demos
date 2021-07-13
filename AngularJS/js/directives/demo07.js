var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){
    $scope.num = 100;
    $scope.name = '张三'
}]);
/**
 * 当 scope:{} 时，表示指令创建一个隔离作用域，此时指令作用域不再继承父作用域，两边的数据不再互通：
 * 本例子中有一个 myName 对应的是将父scope中的num通过自定义指令的标签my-name绑定到了子作用上,即父修改能影响指令，但指令修改不会反向影响父， *
 *  @通常用于传递字符串，注意，使用@传递过去的一定得是字符串，而且@属于单向绑定，我们来看个例子
 *
 * */
app.directive('echo',function(){
    return{
        restrict:'ECAM',
        scope: {
            myName:'@',
            data: '@myNum'
        },
        template:'<div>我是子：<input type="text" ng-model="data"><div>',
        replace:true
    }
});