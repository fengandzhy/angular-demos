var app = angular.module('myApp',[]);

app.provider('myProvider',function(){
    this.name='张三';
    this.sayName=function(name){
        alert(name);
    }
    var age;
    this.setAge = function(newAge){
        console.log(newAge);
        this.age = newAge;
    };
    this.getAge = function(){
        return this.age;
    }
    this.$get =function(){
        return {
            name:this.name,
            age:this.age,
            setAge:this.setAge,
            getAge:this.getAge
        }
    };

});

app.controller('myCtrl',['$scope','myProvider',function($scope,myProvider){
    alert(myProvider.name);
    alert(myProvider.age);
    myProvider.setAge(18);
    alert(myProvider.age);
}]);