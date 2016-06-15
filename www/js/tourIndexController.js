 app.controller('TourIndexController', function($scope, $http){
    $scope.newTour = {};
    $scope.allTours = [];
    $http.get('http://localhost:3000/tours')
      .then(function(response){
        console.log("indexTour", response);
        $scope.allTours = response.data;
      });

    });
