
/**
 * 1.$emit
 该服务贯穿作用域发出一个向上的事件，并通知哪些注册在rootScope.Scope上的监听器。(即只能向父级传播事件)

 2.$broadcast
 该服务发布一个向下的事件给作用域中的所有子节点以及以下的节点，并通知注册在
 rootScope.Scope上的监听器。(即只能向子级传播事件)

 3.$on
 该服务监听指定类型的事件，获取从emit或者broadcast发布的事件。 (即接收事件)
 *
 * */
var app = angular.module('myApp',[]);
app.controller('FatherCtr1',['$scope',function($scope){
    $scope.name='father';
    $scope.$on('child',function (e) {
        $scope.name='接收子级child1传来的事件';
        $scope.$broadcast('down');
    });
}]);

app.controller('ChildCtr1',['$scope',function($scope){
    $scope.name='child1';
    $scope.change = function(){
        $scope.name='child1';
        $scope.$emit('child');
    }
}]);

app.controller('ChildCtrl2',['$scope',function($scope){
    $scope.name='child2';
    $scope.$on('down',function(e){
        $scope.name='接收父级father传来的事件';
    });
}]);


