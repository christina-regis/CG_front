// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('cityGuides', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('guideIndex', {
      url:'/guide/index',
      templateUrl: 'templates/guideIndex.html'
    })
    .state('guideShow', {
      url:'/guide/show/:guideId',
      templateUrl: 'templates/guideShow.html'
    })
    .state('tourIndex', {
      url:'/tour/index',
      templateUrl: 'templates/tourIndex.html'
    })
    .state('tourShow', {
      url:'/tour/show/:tourId',
      templateUrl: 'templates/tourShow.html'
    })
    .state('auth', {
      url: '/auth',
      templateUrl: 'templates/auth.html',
    });

    $urlRouterProvider.otherwise('/tour/index');

});
