'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('24cables', [
  'ngRoute'
]);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/home',
      {
        templateUrl: 'views/home.html',
        controller: 'homeController'
      })
      .when('/services',
      {
          templateUrl: 'views/services.html',
          controller: 'servicesController'
      })
      .when('/aboutUs',
      {
          templateUrl: 'views/aboutUs.html',
          controller: 'aboutUsController'
      })
      .when('/contactUs',
      {
          templateUrl: 'views/contactUs.html',
          controller: 'contactUsController'
      })
      .otherwise({redirectTo: '/home'});
}]);

app.run(function($rootScope, $location) {
    $rootScope.location = $location;
})
