var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){}]);

/**
 * template函数接受两个参数，tElement和tAttrs，
 * 这里我们分别输出两个属性，可以看到tElement表示正在使用此指令的DOM元素，而tAttrs包含了使用此指令DOM元素上的所有属性。
 * */
app.directive('echo',function(){
    return{
        restrict:'EACM',
        template: function(tElement,tAttrs){
            console.log(tElement,tAttrs);
            return '<div>你好,我是'+tAttrs.name+'</div>';
        }
    }
});
