var app = angular.module('positionChange', []);


app.controller('pcCtrl', ['$scope', function ($scope) {

    var dMove = 50;

    $scope.moves = [
        'R',
        'L',
        'U',
        'D'
    ];

    $scope.boxStyle = {
        top: '250px',
        left: '250px'
    };

    $scope.moveBox = function (moveIndex) {

        var top = parseInt($scope.boxStyle.top);
        var left = parseInt($scope.boxStyle.left);

        switch (moveIndex) {
            case 0:
                left += dMove;
                break;
            case 1:
                left -= dMove;
                break;
            case 2:
                top -= dMove;
                break;
            case 3:
                top += dMove;
                break;
        }

        $scope.boxStyle.top = top + 'px';
        $scope.boxStyle.left = left + 'px';

    };

    // setTimeout(function () {
    //     $scope.boxStyle.top = '200px';
    //     $scope.$apply();
    // }, 2000);

}]);