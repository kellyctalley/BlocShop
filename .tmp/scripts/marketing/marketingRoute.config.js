'use strict';

(function () {
  angular.module('app').config(['$stateProvider', '$urlRouterProvider', MarketingRouteConfig]);

  function MarketingRouteConfig($stateProvider, $urlRouterProvider) {
    // Default URL index page.
    $urlRouterProvider.when('homepage', '/homepage');

    $stateProvider.state('base.homepage', {
      url: 'homepage',
      views: {
        'view': {
          template: '<bs-marketing-homepage></bs-marketing-homepage>'
        }
      }
    }).state('base.main-shop', {
      url: 'main-shop',
      views: {
        'view': {
          templateUrl: 'views/marketing/main-shop.html'
        }
      }
    }).state('base.product1', {
      url: 'product1',
      views: {
        'view': {
          templateUrl: 'views/marketing/product1.html'
        }
      }
    });
  }
})();
//# sourceMappingURL=marketingRoute.config.js.map
