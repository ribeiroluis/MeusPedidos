myApp.controller('questionnaireController', ['$scope', function ($scope) {
    $scope.tecniches = [
        { name: "HTML", value: 0 },
        { name: "CSS", value: 0 },
        { name: "Javascript", value: 0 },
        { name: "Python", value: 0 },
        {name: "Django", value: 0},
        {name: "Desenvolvimento iOS", value: 0},
        {name: "Desenvolvimento Android", value: 0},
    ];


    $scope.submit = function () {
       var habilitys = this.tecniches.filter(function(e){
            if(e.value >= 7){                
                return e;
            }           
           });
        habilitys.forEach(function(e){
            if(e.name == "")
            
            
            
            console.log(e);
            });
      
        
        //alert('test');
        // var link = "mailto:ribeiro.luis@hotmail.com"                 
        //          + "&subject=" + escape("This is my subject")
        //          + "&body=" + escape("This is my body")
        // ;
        window.location.href = link;
    }


}]);