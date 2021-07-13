var app = angular.module('myApp',[]);

app.controller('DirectiveController',['$scope','$timeout',function ($scope,$timeout) {

}]);

/**
 * 使用$templateCache存储模板缓存数据
 * */
app.run(['$templateCache',function($templateCache){
    $templateCache.put('tc1','<div style="color:red;">welcome to itany</div>');
    $templateCache.put('tc2','<h2>欢迎来到南京网博</h2>');
    $templateCache.put('tc3','<div><span>我是听风是风</span>\n' +
        '<span>好好学习天天向上</span></div>')
}]);

app.directive('first', function() {
    return {
        restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
        template: '<section><h3>welcome to itany</h3><h4>wbs16102</h4></section>',
        replace: true, //默认为false，不替换当前标签
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {
            console.log('link');
        }
    };
});

/**
 * replace 默认为false，不替换当前标签
 * 这里设置成true就把当前标签替换了 就是说前台页面<div echo name="听风是风"></div>这个标签没有了
 * template函数接受两个参数，tElement和tAttrs，这里我们分别输出两个属性，
 * 可以看到tElement表示正在使用此指令的DOM元素，事实上tElement并不是DOM类型的元素
 * 而tAttrs包含了使用此指令DOM元素上的所有属性
 * */
app.directive('echo', function() {
    return {
        restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
        replace: true,
        template: function(tElement,tAttrs){
            console.log(tElement,tAttrs);
            return '<div>你好，我是' + tAttrs.name + '</div>'
        }
    };
});

app.directive('second', ['$templateCache', function($templateCache){
    return {
        replace: true,
        template: $templateCache.get('tc1'),
    };
}]);

/**
 * 如果你使用了replace:true属性(后面会介绍)，且模板代码DOM结构有多层，
 * 请记住使用一个父级元素包裹你所有DOM结构，否则会报错，因为angularjs模板只支持拥有一个根元素
*/

app.directive('third', ['$templateCache', function($templateCache){
    return {
        replace: true,
        template: $templateCache.get('tc3'),
    };
}]);


app.directive('fourth', ['$templateCache', function($templateCache){
    return {
        templateUrl:'template/t1.html',
    };
}]);


