var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){
    $scope.name='张三'
}]);
/**
 *
 * */
app.directive('echo',function(){
    return{
        restrict:'ECAM',
        transclude: true,
        replace:true,
        //template: '<p>我是echo <span ng-transclude></span></p>'
        //template: '<p ng-transclude>我是echo </p>'
        template: '<p>我是echo</p>',
        controller:['$scope','$element','$attrs','$transclude',function($scope,$element,$attrs,$transclude){
            console.log($element);
            $transclude(function(clone){
                $element.append(clone);
            });
        }]
    }
});

/**
 * transclude: true 可以把原有的内容显示出来 就好比<first>AABB</first> 可以把AABB显示出来
 * 具体的这个内容需要放到ng-transclude 里面
 * */

app.directive('first',function(){
    return{
        restrict: 'ECAM',
        template:'<h1>welcome to itany<mark ng-transclude></mark></h1>',
        transclude:true
    }
})