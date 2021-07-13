var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){

}]);
/**
 * controllerAs用于设置控制器的别名，我们都知道angularjs在1.2版本之后，
 * 对于数据绑定提供了额外一种方式，第一种是绑定在scope上，第二种是使用controller as vm类似的写法，绑定在this上。我们来看个简单的例子
 * */
app.directive('echo',function(){
    return{
        restrict:'ECAM',
        scope:{},
        template:'<p>{{vm.name}}</p>',
        controllerAs: 'vm',
        // controller:['$scope','$element','$attrs','$transclude',function($scope,$element,$attrs,$transclude){
        //     $scope.name='我是听风';
        // }]
        controller:function (){
            this.name = '听风是风！';
        }
    }
});