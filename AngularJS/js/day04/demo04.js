var app = angular.module('myApp',[]);

app.controller('DirectiveController',['$scope','$timeout',function ($scope,$timeout) {

}]);
/**
 * transclude: true 可以把原有的内容显示出来 就好比<first>AABB</first> 可以把AABB显示出来
 * 具体的这个内容需要放到ng-transclude 里面
 * */
app.directive('first',[function(){
    return {
        template: '<h1>welcome to itany<mark ng-transclude></mark></h1>',
        transclude: true,
    }
}]);

app.directive('echo',[function(){
    return {
        transclude: true,//若想使用$transclude方法请设置为true
        controller: function ($scope, $element, $attrs, $transclude) {
            $transclude(function (clone) {
                var a = angular.element('<a>');
                a.attr('href',$attrs.attr);//取得div上的attr属性并设置给a
                a.text(clone.text());// 通过clone属性可以获取指令嵌入内容，包括文本，元素名等等，已经过JQ封装，这里获取文本并添加给a
                $element.append(a); // 将a添加到指令所在元素内
            });
        }
    }
}]);



