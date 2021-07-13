var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){

}]);
/**
 * 这里的$element 就是前面的div, 这里的clone就是前面的那话‘点我跳转百度’
 * 这里的$transclude 就相当于 transclude: true 的时候放到 ng-transclude 里面的
 * */
app.directive('echo',function(){
    return{
        restrict:'ECAM',
        transclude: true,
        scope:{},
        controller:['$scope','$element','$attrs','$transclude',function($scope,$element,$attrs,$transclude){
            //console.log($element);
            $transclude(function(clone){
                //console.log(clone);
                var a = angular.element('<a>');
                a.attr('href',$attrs.attr);//取得div上的attr属性并设置给a
                a.text(clone.text());// 通过clone属性可以获取指令嵌入内容，包括文本，元素名等等，已经过JQ封装，这里获取文本并添加给a
                $element.append(a);
            });
        }]
    }
});

