app.controller('TourShowController', function($scope, $state, $http) {
  $scope.allTours = [];
  $scope.newTour = {};
  $scope.show = show;
  // $scope.update = update;
  $scope.tourId = $state.params.tourId;

  function show(tourId){
    $http.get('http://localhost:3000/tours/' + tourId)
      .then(function(response){
        console.log(response);
        $scope.tour = response;
      });
  }
  show($state.params.tourId);

});
