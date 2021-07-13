var app = angular.module('myApp',[]);

app.controller('myCtrl',['$scope',function($scope){

}]);

/**
 * 指令命名需使用驼峰模式，Html引入指令需使用“-”连接每个单词，如指令myDir在引入指令时改为my-dir写法。E、A、C、M四种形式可组合使用。
 *
 * restrict表示指令在DOM中能以哪种形式被声明，是一个可选值，可选值范围有E(元素)A(属性)C(类名)M(注释)四个值，
 * 如果不使用此属性则默认值为EA，以下四种表现相同
 *
 * template,用来表示模板，可以是一段字符串，如“<h1>这是自定义指令</h2>”,也可以是一个函数，可以参考上面的例子
 * */
app.directive('myDir',function(){
    return {
        template:'<h1>这是自定义指令</h1>',
        restrict:'ECMA'
    }
})
