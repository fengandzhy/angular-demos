var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){
    $scope.num = 100;
}]);
/**
 * 当 scope:flase 时，表示指令不创建额外的作用域，默认继承使用父级作用域，所以指令中能正常使用和修改父级中所有变量和方法，
 * */
app.directive('echo',function(){
   return{
       restrict:'ECAM',
       scope:false,
       template:'<div>我是子:<input type="text" ng-model="num"></div>',
       replace:true
   }
});

