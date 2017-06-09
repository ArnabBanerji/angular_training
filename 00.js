var app1 = angular.module('app1', ['app2']);

var app2 = angular.module('app2', []);


app1.controller('app1controller', ['$scope', function ($scope) {
    $scope.testValue = 'Angularized 1!';
    $scope.testValue2 = 'App1 Test Value 2';
}]);

app2.controller('app2controller', ['$scope', function ($scope) {
    $scope.testValue = 'Angularized 2!';
}]);
