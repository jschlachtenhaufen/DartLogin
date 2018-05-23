var app = angular.module('app', []);

app.controller('optionsController', function($scope) {
    $scope.data = "Angular test";

    $scope.onClickTest = function() {
        swal("Is this working!?");
    }
});
