var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){
    $scope.name='张三'
}]);
/**
 * 在上述例子中，我们在父作用域声明了一个变量name，有趣的是我们并未对指令传递name属性，
 * 甚至还为指令添加了隔离作用域，但是因为指令的controller的值使用了与父作用域控制器相同的名字myCtrl，
 * 导致指令中也拥有了相同的controller，同样拥有了自己name属性，但这两个name属性互不干扰，毕竟有隔离作用域的存在
 *
 * 就等于拷贝了myCtrl 里面的各种值到 echo 的controller中 ng-bind="name" 绑定的是自己controller里面的值
 * */
app.directive('echo',function(){
    return{
        restrict:'ECAM',
        scope: {},
        template:'<div ng-bind="name"></div>',
        replace:true,
        controller:'myCtrl'
    }
});