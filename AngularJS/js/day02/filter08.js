var app = angular.module('myApp',[]);

app.controller('FilterController',['$scope','$filter',function ($scope,$filter) {
    $scope.friends = [
        {name: 'John', phone: '44555-1276'},
        {name: 'Annie', phone: '800-BIG-MARY'},
        {name: 'Mike', phone: '11555-4321'},
        {name: 'Adam', phone: '33555-5678'},
        {name: 'David', phone: '387555-8765'},
        {name: 'Mikay', phone: '555-5678'}
        ];
}]);

app.filter('myFilter',function () {
    return function(input){
        var output = [];
        angular.forEach(input,function(value,key){
            console.log('key=='+key);
            console.log("value==" + JSON.stringify(value));
            console.log("value.phone类型==" + typeof (value.phone));
            console.log("value.phone.indexOf==" + value.phone.indexOf("555"));
            if (value.phone.indexOf("555") >= 0) {
                output.push(value);
            }
        });
        return output;
    }
});

