var app = angular.module('myApp',[]);

app.controller('DirectiveController',['$scope','$timeout',function ($scope,$timeout) {
    $scope.data = 'echo';
}]);

/**
 * @通常用于传递字符串，注意，使用@传递过去的一定得是字符串，而且@属于单向绑定，即父修改能影响指令，但指令修改不会反向影响父
 * */
app.directive('echo',[function(){
    return {
        restrict: 'EACM',
        scope: {
            myName:"@"
        },
        template: '<div><input type="text" ng-model="myName"><div>',
        replace: true,
    }
}]);

app.directive('first', [function(){
    return {
        scope: {
            //将父作用域中的name绑定到隔离作用域，实现访问父作用域中的name
            // name:'@username', //@符号后面的名称必须与html中指令里面添加的属性名相同
            name:'@', //简写，如果省略则html中指令里面添加的属性名必须为name
            age:'@',
        },
        replace: false,
        controller: function($scope, $element, $attrs, $transclude) {


        },
        template: 'name: <input type="text" ng-model="name"><br>'+
            'age: <input type="text"  ng-model="age"><br>'+
            'name={{name}}，age={{age}}',
    };
}]);


