//noteId as specified in app.js
app.controller('GuideUpdateController', function($scope, $state, $http) {
  $scope.allGuides = [];
  $scope.show = show;
  $scope.guideId = $state.params.guideId;
  // $http.get('http://localhost:3000/guides')
  //   .then(function(response){
  //     console.log("indexGuide", response);
  //     $scope.allGuides = response.data;
  //     });
  function show(guideId){
    $http.get('http://localhost:3000/guides/' + guideId)
      .then(function(response){
        console.log(response);
        self.guide = response;
      });
  };
  show($state.params.guideId);

  // $scope.notes =[
  //   {
  //     id: '1',
  //     title: 'first note',
  //     description: 'This is my first note'
  //   },
  //   {
  //     id: '2',
  //     title: 'second note',
  //     description: 'This is my second note'
  //   }
  // ];
});
