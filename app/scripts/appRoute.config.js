(function () {
  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', AppRouteConfig]);

  function AppRouteConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
    // Default URL client/index page.
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/client', '/client');

    $stateProvider
      .state('base', {
        url: '/',
        views: {
          'main@': {
            templateUrl: 'views/layouts/base.html'
          }
        }
      });
  }
})();
