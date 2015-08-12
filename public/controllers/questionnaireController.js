/* global myApp */

/// <reference path="../js/spin.min.js" />

myApp.controller('questionnaireController', ['$scope', '$http', function ($scope, $http) {
    var emailsToSent = [];  
    
    $scope.candidateInformation = {
        post: "",
        email: "",
        name: ""
    };

    $scope.techniques = [
        {
            post: "FronEnd",
            techniques: [{ name: "HTML", value: 0 }, { name: "CSS", value: 0 }, { name: "Javascript", value: 0 }]
        }, {
            post: "BackEnd",
            techniques: [{ name: "Python", value: 0 }, { name: "Django", value: 0 }]
        }, {
            post: "Mobile",
            techniques: [{ name: "Desenvolvimento iOS", value: 0 }]
        }, {
            post: "Mobile",
            techniques: [{ name: "Desenvolvimento Android", value: 0 }]
        }];
    
    var $btn;
    $scope.submit = function () {
        $btn = $("#submitButton").button('loading');
        
        
        try {
            var posts = [];
            this.techniques.forEach(function (element, index, array) {
                if (element.techniques.filter(function (e) {
                    if (e.value >= 7) return e;
                }).length == element.techniques.length) {
                    if (posts.indexOf(element.post) < 0) {
                        posts.push(element.post);
                    }
                }
            });
            if (posts.length < 1) {
                posts.push("");
            }
            for (var i = 0; i < posts.length; i++) {
                emailsToSent.push({
                    post: posts[i],
                    name: this.candidateInformation.name,
                    email: this.candidateInformation.email,
                    subject: "Obrigado por se candidatar",
                    emailText: "Obrigado por se candidatar, assim que tivermos uma vaga disponível para programador " + posts[i] + " entraremos em contato."
                });
            }
            sendEmail(emailsToSent.pop());

        } catch (error) {
            console.error(error);
        }
    }

    function sendEmail(data) {
        try {
            $http.post('/sendEmail', data).success(function (data) {
            console.info(data);
            if (emailsToSent.length > 0) {
                sendEmail(emailsToSent.pop());
            }else{
                $btn.button('reset');
            }
        }).error(function (data) {
            console.error('Error: ' + data);
            $btn.button('reset');
        });            
        } catch (error) {
            console.error(error);
        } 
    }
}]);