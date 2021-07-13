var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){
    $scope.num = 100;
}]);
/**
 * 当 scope:true 表示指令创建自己的作用域，但仍然会继承父作用域，
 * 说直白点就是，指令自己有的用自己的，没有的找父级拿，同一份数据父级能影响指令，但指令却无法反向影响父级，这就是继承但隔离
 *
 * 一开始输入父输入框子输入框也跟着变化, 后来一旦子框被输入,改变不了父框的内容, 同时输入父框也无法改变子框的值
 * 就是说你在子输入框里输入的一个值,它是绑定的是子作用域里的num自然是无法影响到父作用域的, 另外这个子作用域里有值了
 * 自然就不会从父作用域里再拿值,这也就是为什么一旦子输入框里发生了输入, 父作用框里怎么输入都不会改变子作用框里的值了
 * */
app.directive('echo',function(){
    return{
        restrict:'ECAM',
        scope:true,
        template:'<div>我是子：<input type="text" ng-model="num">我的名字是：{{name}}<div>',
        replace:true
    }
});
