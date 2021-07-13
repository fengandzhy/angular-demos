var app = angular.module('myApp',[]);


/**
 * 用于对数组中的数据进行筛选过滤，返回新数组，
 可包含两个参数
 第一个参数可以是以下类型
 字符串：包含该字符串的数据，符号!表示不包含
 对象：将过滤对象与参数对象的相应属性值进行比较
 函数：将过滤数据作为函数参数传递进去，返回true
 表示可出现在新数组中
 第二个参数可以是
 true：使用angular.equals进行比较
 false：字符串比较时不区分大小写，默认值
 函数：运行后返回true即可出现在新数组中
 * */
app.controller('FilterController',['$scope','$filter',function ($scope,$filter) {
    $scope.initMemberArr = [
        {
            id:12,
            name:'张一',
            age:20,
        },
        {
            id:23,
            name:'张二',
            age:31,
        },
        {
            id:34,
            name:'李三',
            age:12,
        },
        {
            id:45,
            name:'张五',
            age:33,
        },
        {
            id:56,
            name:'李六',
            age:24,
        }
    ];
    $scope.ageFilt = function(arr){
        return arr.age > 30;
    }
}])