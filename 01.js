var app = angular.module('qaApp', []);

app.controller('qaController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.testValue = 'Test Success!';

    $rootScope.testParent = 'Testing Parent Root';
    $scope.testParent = 'Testing Parent Ctrl';

    $scope.questionClass = 'question';
    $scope.optionClass = 'btn-lg';
    $scope.currentQuestionIndex = 0;

    $scope.showIndex = true;

    var data = [
        {
            'test': 'xyz 1',
            question: 'What is the spelling of a?',
            options: ['a', 'b', 'c', 'd']
        },
        {
            'test': 'xyz 2',
            question: 'What is the spelling of b?',
            options: ['a', 'b', 'c', 'd']
        },
        {
            'test': 'xyz 3',
            question: 'What is the spelling of c?',
            options: ['a', 'b', 'c', 'd']
        },
        {
            'test': 'xyz 4',
            question: 'What is the spelling of d?',
            options: ['a', 'b', 'c', 'd']
        }];

    $scope.qaData = data;
    $scope.qa = data[$scope.currentQuestionIndex];

    $scope.showAnswerClicked = false;

    $scope.isCorrect = function (optionIndex, questionIndex) {
        return (optionIndex === questionIndex);
    };

    $scope.showOptionIndex = function () {
        $scope.showIndex = !$scope.showIndex;
    };

    $scope.getTextOfOption = function (pIdx, idx) {
        return ($scope.showIndex) ? (idx + 1) + '. ' + data[pIdx].options[idx] : data[pIdx].options[idx];

    }

}]);

