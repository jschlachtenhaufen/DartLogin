var app = angular.module('app', []);
var apiKey = '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';
app.controller('optionsController', function($scope, $http) {
    
    $http.defaults.headers.common.Authorization = 'Bearer ' + apiKey;
    $scope.optionsSubmit = function () {
        let netId = $scope.netId;
        let password = $scope.password;
        let confirmPassword = $scope.confirmPassword;
        if (password !== confirmPassword)
            return swal("Oops", "Make sure your passwords match", "warning");

        chrome.storage.sync.set({'netId': netId, 'password': password}, function() {
            swal("Nice!", "Net ID and Password Saved", "success");
        });
    }

    $scope.feedbackSubmit = function() {
        let message = $scope.textarea;
        let body = {
            "personalizations": [
                {
                    "to" : [
                            {
                                "email": "jschlach25@gmail.com"
                            }
                    ],
                    "subject": "DartLogin Message"
                }
            ],
            "from": {
                "email": "DartLogin@chromeExtensions"
            },
            "content": [
                {
                    "type": "text/plain",
                    "value": message
                }
            ]
        }

        let req = {
            method: 'POST', 
            url: 'https://api.sendgrid.com/v3/mail/send',
            headers: {
                'Authorization': 'Bearer ' + apiKey
            },
            data: body
        }

        $http(req).then(function(res) {
            swal("Thanks for the message!", "", "success");
        }).catch(function(err) {
            swal("Oops!", "Something went wrong. Try again later", "error");
        });
    }

});
