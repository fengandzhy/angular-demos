var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){}]);

/**
 *  replace值为布尔值，用于决定指令模板是否替换声明指令的DOM元素
 * */
app.directive('echo',function(){
    return{
        restrict:'EACM',
        templateUrl:'template.html',
        replace:true
    }
});
