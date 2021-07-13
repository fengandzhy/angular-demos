var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){

}]);
/**
 * 对于指令开发，link函数和controller中都可以定义指令需要的属性或方法，但如果这个属性或方法只是本指令使用，你可以定义在指令的link函数中，
 * 但如果这个属性方法你想在别的指令中也使用，推荐定义在controller中
 *
 * require 决定的是把哪个contoller传过来
 *
 * */
app.directive('echo',function(){
    return{
        restrict:'ECAM',
        scope:{},
        controllerAs: 'vm',
        controller:['$scope','$element','$attrs','$transclude',function($scope,$element,$attrs,$transclude){
            $scope.name='张三'
            this.sayName = function(name){
                console.log(name);
            }
        }]
        // link:function($scope,$element,$attrs,$controller){
        //     console.log($controller.name);
        //     console.log($scope.name);
        // },
    }
});

app.directive('echo2',function(){
    return{
        restrict:'ECAM',
        scope:{},
        require: '^echo',
        link:function($scope,$element,$attrs,$controller){
            $scope.name='李四';
            $controller.sayName($scope.name);
        },
    }
});