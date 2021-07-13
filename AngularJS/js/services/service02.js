var app = angular.module('myApp',[]);

app.service('myService',function(){
    this.name='张三';
    this.sayName=function(name){
        alert(name);
    }
    var age;
    this.setAge = function(newAge){
        age = newAge;
    };
    this.getAge = function(){
        return age;
    }
});

app.controller('myCtrl',['$scope','myService',function($scope,myService){
    alert(myService.name);
    myService.sayName('李四');
    myService.setAge(18);
    alert(myService.age);
}]);


