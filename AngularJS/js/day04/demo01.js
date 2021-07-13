var app = angular.module('myApp',[]);

app.controller('DirectiveController',['$scope','$timeout',function ($scope,$timeout) {

}]);
/**
 * angular指令的定义，myDirective ，使用驼峰命名法
 * restrict表示指令在DOM中能以哪种形式被声明，是一个可选值，可选值范围有E(元素)A(属性)C(类名)M(注释)四个值，如果不使用此属性则默认值为EA
 * */
app.directive('myDir', function() {
    return {
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment，默认AE
        link: function($scope, iElm, iAttrs, controller) {
            console.log('自定义指令myDir');
        }
    };
});

app.directive('myDir2', function() {
    return {
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment，默认AE
        link: function($scope, iElm, iAttrs, controller) {
            console.log('自定义指令myDir2');
        }
    };
});

app.directive('myDir3', function() {
    return {
        restrict: 'C', // E = Element, A = Attribute, C = Class, M = Comment，默认AE
        link: function($scope, iElm, iAttrs, controller) {
            console.log('自定义指令myDir3');
        }
    };
});
