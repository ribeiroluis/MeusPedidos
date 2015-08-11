/* global myApp */
myApp.controller('questionnaireController', ['$scope', '$http', function ($scope, $http) {
    var _dom = new utilsDom();    
    $scope.techniques = { 
        "FronEnd": [{ name: "HTML", value: 0 }, { name: "CSS", value: 0 }, { name: "Javascript", value: 0 }],
        "BackEnd": [{ name: "Python", value: 0 }, { name: "Django", value: 0 }],
        "Mobile": [{ name: "Desenvolvimento iOS", value: 0 }, { name: "Desenvolvimento Android", value: 0 }]};
    $scope.submit = function () {
        var emailsToSent = [];
        $.each(this.techniques, function(index){
            if(this.techniques[index].filter(function(e){if(e.value >= 7)return e}).length < this.techniques[index].length){
               emailsToSent.push(index); 
            }
        });
        
        
        //alert('test');
        // var link = "mailto:ribeiro.luis@hotmail.com"                 
        //          + "&subject=" + escape("This is my subject")
        //          + "&body=" + escape("This is my body")
        // ;
        //window.location.href = link;
    }
    function sentEmail(data){
        $http.post('/sendEmail', data).success(function (data) {
            console.log(data);            
        }).error(function (data) {
            console.log('Error: ' + data);                        
        });        
    }
}]);