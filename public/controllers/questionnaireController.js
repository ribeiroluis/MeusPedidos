
myApp.controller('questionnaireController', ['$scope', '$http', function ($scope, $http) {
    var _dom = new utilsDom();    
    $scope.techniques = [
        {
            group: "FronEnd",
            techniques: [{ name: "HTML", value: 0 }, { name: "CSS", value: 0 }, { name: "Javascript", value: 0 }],
        }, {
            group: "BackEnd",
            techniques: [{ name: "Python", value: 0 }, { name: "Django", value: 0 }],
        }, {
            group: "Mobile",
            techniques: [{ name: "Desenvolvimento iOS", value: 0 }, { name: "Desenvolvimento Android", value: 0 }],
        }
    ];
    $scope.submit = function () {
        _dom.launchLoading($('#loading'));
        // var habilitys = this.tecniches.filter(function (e) {
        //     if (e.value >= 7) {
        //         return e;
        //     }
        // });        
        // $http.get('/get').success(function(data) {
        // 	console.info('info: ' + data);
        // }).error(function(data) {
        // 	console.log('Error: ' + data);
        // });
        $http.post('/sendEmail', this.techniques).success(function (data) {
            console.log(data);
            _dom.removeLoading();
        }).error(function (data) {
            console.log('Error: ' + data);
            _dom.removeLoading();            
        });
        //alert('test');
        // var link = "mailto:ribeiro.luis@hotmail.com"                 
        //          + "&subject=" + escape("This is my subject")
        //          + "&body=" + escape("This is my body")
        // ;
        //window.location.href = link;
    }


}]);