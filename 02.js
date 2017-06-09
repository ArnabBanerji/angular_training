var app = angular.module('positionChange', []);


app.controller('pcCtrl', ['$scope', function ($scope) {

    var dMove = 50;

    $scope.moves = [
        'U',
        'L',
        'R',
        'D'
    ];

    $scope.boxStyle = {
        top: '250px',
        left: '250px'
    };

    $scope.moveBox = function (moveIndex) {

        var top = parseInt($scope.boxStyle.top);
        var left = parseInt($scope.boxStyle.left);

        var move = $scope.moves[moveIndex];

        switch (move) {
            case 'R':
                left += dMove;
                break;
            case 'L':
                left -= dMove;
                break;
            case 'U':
                top -= dMove;
                break;
            case 'D':
                top += dMove;
                break;
        }

        $scope.boxStyle.top = top + 'px';
        $scope.boxStyle.left = left + 'px';

    };

    setTimeout(function () {
        console.log('Timeout');
        $scope.boxStyle.top = '200px';
        $scope.$apply();
    }, 2000);

}]);