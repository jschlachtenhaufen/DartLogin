var app = angular.module('app', []);

app.controller('optionsController', function($scope) {
    
    $scope.optionsSubmit = function () {
        let netId = $scope.netId;
        let password = $scope.password;
        let confirmPassword = $scope.confirmPassword;
        console.log(netId);
        console.log(password);
        console.log(confirmPassword);
    }

    $scope.feedbackSubmit = function() {
        let message = $scope.textarea;
        console.log(message);
    }
});
