// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        // Home Page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        // nerds page that uses the NerdController
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        });
    $locationProvider.html5Mode(true);
}]);