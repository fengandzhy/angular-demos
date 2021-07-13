var app = angular.module('myApp',[]);

app.factory('myFactory',function(){
    var service = {};
    service.name='张三';
    var age;
    service.setAge = function(newAge){
        age = newAge;
    };
    service.getAge = function(){
        return age;
    }
    return service;
});



// app.factory('FirstService', [function(){
//     return {
//         fun:function(){
//             console.log('执行FirstService中的fun()');
//         },
//         calc:function(num1,num2){
//             return num1+num2;
//         }
//     };
// }]);

app.controller('myCtrl',['$scope','myFactory',function($scope,myFactory){
    alert(myFactory.name);
}]);


