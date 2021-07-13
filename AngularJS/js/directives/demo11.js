var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){
    $scope.name='张三'
}]);
/**
 * 1. 如果这里改成 replace:true, 页面中的div会被这个div取代 但是页面中的div的属性不会被移除, 也就是页面div的 echo属性仍然在
 * 2. 如果这里改成 replace:false, 页面的div 会完全包含这里的这个div
 * $scope：指令当前的作用域，所有在scope上绑定的属性方法，在指令中都可以随意使用，在上面的例子中我们已经有所展示
 * $element：使用指令的当前元素，比如上面的例子，因为echo指令是加在div元素上，我们直接输出$element属性，可以看到就是div
 * $attr：使用指令当前元素上的属性，还是上面的例子，我们给此div添加一些额外的属性，同样输出它
 * $transclude：链接函数，用于克隆和操作DOM元素，没错，通过此方法我们甚至能在controller中操作dom，注意，如果要使用此方法得保证transclude属性值为true，来看个简单的例子
 *
 * */
app.directive('echo',function(){
    return{
        restrict:'ECAM',
        scope: {},
        //template:'<div><input type="text" ng-model="name"><div>',
        template:'<div name="echo" age="28" ng-bind="name"></div>',
        replace:true,
        controller:['$scope','$element','$attrs','$transclude',function($scope,$element,$attrs,$transclude){
            $scope.name='李四';
            console.log($scope);
            console.log($element);
            console.log($attrs);
            console.log($transclude);
        }]
    }
});