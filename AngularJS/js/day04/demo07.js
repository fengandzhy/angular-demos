var app = angular.module('myApp',[]);

app.controller('DirectiveController',['$scope','$timeout',function ($scope,$timeout) {
    $scope.name='tom';
    $scope.age=21;

    $scope.user={
        name:'jack',
        age:18,
    };

    $scope.study=function(){
        console.log('welcome to itany');
    };
}]);

/**
 * 请注意，指令上传递data时两边并未使用{{}}包裹，这与@传值还是有很大区别。
 * = 用于传递各类数据，字符串，对象，数组等等，而且是双向绑定，即不管修改父还是子，这份数据都会被修改，
 * */
app.directive('echo',[function(){
    return{
        restrict: 'EACM',
        scope: {
            myName:"="
        },
        template:'<input type="text" ng-model="myName">',
        replace: true
    }
}]);


app.directive('second',[function(){
    return{

        scope: {
            myUser:"="
        },
        template:'user.name: <input type="text" ng-model="myUser.name"><br>'+
                'user.age: <input type="text" ng-model="myUser.age"><br>'+
                'user.name={{myUser.name}},user.age={{myUser.age}}'
    }
}]);

// app.directive('second', [function(){
//     return {
//         scope: {
//             user:'=',
//         },
//         controller: function($scope, $element, $attrs, $transclude) {
//
//         },
//         template: 'user.name: <input type="text" ng-model="user.name"><br>'+
//             'user.age: <input type="text" ng-model="user.age"><br>'+
//             'user.name={{user.name}},user.age={{user.age}}',
//     };
// }]);




