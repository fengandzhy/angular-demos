var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){

}]);
/**
 * link函数拥有四个参数，scope表示指令的作用域，在scope上绑定的数据在模板上都能直接访问使用。
 * elem表示当前使用指令的DOM元素，attrs表示当前使用指令DOM元素上的属性，这三点与前面介绍指令controller参数一致。
 * 第四个参数controller表示指令中require的指令的controller，前面已经有例子展示，注意，如果指令没有require其它指令，
 * 那么第四个参数就是指令自身的controller
 * */
app.directive('echo',function(){
    return{
        restrict:'ECAM',
        scope:{},
        controllerAs: 'vm',
        template:'<p>{{vm.name}}</p>',
        controller:['$scope','$element','$attrs','$transclude',function($scope,$element,$attrs,$transclude){
            $scope.name='张三';
            this.name='李四';
        }],
        link:function($scope,$element,$attrs,$controller){
            console.log($controller.name);
            console.log($scope.name);
        },
    }
});