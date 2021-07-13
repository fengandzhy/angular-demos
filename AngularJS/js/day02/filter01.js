var app = angular.module('myApp',[]);


/**
 *
 * Angular共内置了9种过滤器，分别是
 货币currency
 数字number
 日期date
 字符串大小写lowercase和uppercase
 个数限制limitTo
 JSON格式化json
 数据筛选filter
 数据排序orderBy
 * */
app.controller('CurrencyController',['$scope','$filter',function ($scope,$filter) {
    $scope.price = $filter('currency')('4.135');
    $scope.price1 = $filter('currency')('4.135','￥');
    $scope.price2 = $filter('currency')($filter('number')('5.131233','5'),'￥','3');
}]);
