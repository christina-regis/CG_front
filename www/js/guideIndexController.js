 app.controller('GuideIndexController', function($scope, $http){
    $scope.newGuide = {};
    $scope.allGuides = [];
    $http.get('http://localhost:3000/guides')
      .then(function(response){
        console.log("indexGuide", response);
        $scope.allGuides = response.data;
      });

    $scope.notes =[
    {
      id: '1',
      title: 'first note',
      description: 'This is my first note'
    },
    {
      id: '2',
      title: 'second note',
      description: 'This is my second note'
    }
    ];
  });

