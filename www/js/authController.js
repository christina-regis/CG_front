app.controller('AuthController', function($scope, $state, $http, $location) {
  $scope.guideAuth = {};
  $scope.userAuth = {};
  $scope.guideLogin = guideLogin;
  $scope.tourId = $state.params.tourId;

  function guideLogin(){
    console.log("guide login");
    $http.post('http://localhost:3000/guideauth', $scope.guideAuth)
      .then(function(response){
        console.log(response);
        $scope.tour = response;
        $location.path('tour/index');
      });
  }

});
