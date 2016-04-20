(function () {
  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', AppRouteConfig]);

  function AppRouteConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
    // Default URL client/index page.
    $urlRouterProvider.when('', '/');

    $stateProvider
      .state('base', {
        url: '/',
        views: {
          'topbar@': {
            templateUrl: 'views/layouts/shared/topbar.html'
          },
          'main@': {
            templateUrl: 'views/layouts/base.html'
          },
          'footer@': {
            templateUrl: 'views/layouts/shared/footer.html'
          }
        }
      });
  }
})();
