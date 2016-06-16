app.controller('AuthController', function($scope, $state, $http, $location) {
  $scope.auth = {};
  $scope.login = login;
  $scope.tourId = $state.params.tourId;

  function login(){
    console.log("login");
    $http.post('http://localhost:3000/auth', $scope.auth)
      .then(function(response){
        console.log(response);
        $scope.tour = response;
        $location.path('tour/index');
      });
  }

});
