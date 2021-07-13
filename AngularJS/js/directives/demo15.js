var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){

}]);
/**
 * link函数拥有四个参数，scope表示指令的作用域，在scope上绑定的数据在模板上都能直接访问使用。
 * elem表示当前使用指令的DOM元素，attrs表示当前使用指令DOM元素上的属性，这三点与前面介绍指令controller参数一致。
 * 第四个参数controller表示指令中require的指令的controller，前面已经有例子展示，注意，如果指令没有require其它指令，
 * 那么第四个参数就是指令自身的作用域
 * */
app.directive('echo',function(){
    return{
        restrict:'ECAM',
        scope:{},
        template:'<div ng-click="vm.sayName()">点我输出{{name}}</div>',
        controllerAs: 'vm',
        controller:function (){
            this.sayName=function(){
                console.log('听风是风');
            }
        },
        link:function(scope, elem, attrs, controller){
            scope.name='ABC';
        }
    }
});