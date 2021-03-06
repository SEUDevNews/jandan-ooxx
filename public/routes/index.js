const app = require('../index').app;

app.config(['$urlRouterProvider', '$locationProvider',
  ($urlRouterProvider, $locationProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider
      .when('', '/')
      .otherwise('/');
  }
]);

app.config(['$stateProvider', $stateProvider => {
  $stateProvider
    .state('index', {
      url: '/',
      controller: 'IndexController',
      templateUrl: '/public/views/index.html',
    })
    .state('index.image', {
      url: '{id:int}',
      controller: 'ImageController',
      templateUrl: '/public/views/image.html',
    })
    .state('history', {
      url: '/history',
      controller: 'HistoryController',
      templateUrl: '/public/views/history.html',
    });
}]);
