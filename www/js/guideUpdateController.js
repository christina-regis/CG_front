//noteId as specified in app.js
app.controller('GuideUpdateController', function($scope, $state, $http) {
  $scope.allGuides = [];
  $scope.newGuide = {};
  $scope.show = show;
  $scope.update = update;
  $scope.guideId = $state.params.guideId;

  function show(guideId){
    $http.get('http://localhost:3000/guides/' + guideId)
      .then(function(response){
        console.log(response);
        $scope.guide = response;
      });
  }
  show($state.params.guideId);

  function update(guideId){
    $http.patch('http://localhost:3000/guides/' + guideId, $scope.guide.data)
      .then(function(response){
        console.log(response);
        //redirect
      });
      $scope.newGuide = {};
  }

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
