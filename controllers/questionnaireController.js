myApp.controller('questionnaireController', ['$scope', function ($scope) {
    $scope.tecniches = [
        { name: "HTML", value: 0 },
        { name: "CSS", value: 0 },
        { name: "Javascript", value: 0 },
        { name: "Python", value: 0 }
    ];


    $scope.submit = function () {
        alert('test');
        var link = "mailto:ribeiro.luis@hotmail.com"                 
                 + "&subject=" + escape("This is my subject")
                 + "&body=" + escape("This is my body")
        ;
        window.location.href = link;
    }


}]);