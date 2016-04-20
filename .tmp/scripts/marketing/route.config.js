'use strict';

(function () {
  angular.module('app').config(['$stateProvider', '$urlRouterProvider', MarketingRouteConfig]);

  function MarketingRouteConfig($stateProvider, $urlRouterProvider) {
    // Default URL index page.
    // $urlRouterProvider.when('', '/');

    $stateProvider.state('base.homepage', {
      url: '/homepage',
      views: {
        'view': {
          template: 'Hello World'
        }
      }
    });
  }
})();
//# sourceMappingURL=route.config.js.map
