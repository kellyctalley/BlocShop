(function () {
  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', MarketingRouteConfig]);

  function MarketingRouteConfig ($stateProvider, $urlRouterProvider) {
    // Default URL index page.
    $urlRouterProvider.when('homepage', '/homepage');

    $stateProvider
      .state('base.homepage', {
        url: 'homepage',
        views: {
          'view': {
            template: '<bs-marketing-homepage></bs-marketing-homepage>'
          }
        }
      })
      .state('base.main-shop', {
        url: 'main-shop',
        views: {
          'view': {
            templateUrl: 'views/marketing/main-shop.html'
          }
        }
      })
      .state('base.shop-concrete', {
        url: 'shop-concrete',
        views: {
          'view': {
            templateUrl: 'views/marketing/shop-concrete.html'
          }
        }
      })
      .state('base.shop-decor', {
        url: 'shop-decor',
        views: {
          'view': {
            templateUrl: 'views/marketing/shop-decor.html'
          }
        }
      })
      .state('base.shop-garden', {
        url: 'shop-garden',
        views: {
          'view': {
            templateUrl: 'views/marketing/shop-garden.html'
          }
        }
      })
      .state('base.shop-paintings', {
        url: 'shop-paintings',
        views: {
          'view': {
            templateUrl: 'views/marketing/shop-paintings.html'
          }
        }
      })
      .state('base.product', {
        url: 'product/:id',
        views: {
          'view': {
            template: '<bs-marketing-product></bs-marketing-product>'
          }
        }
      })
      .state('base.product1', {
        url: 'product1',
        views: {
          'view': {
            templateUrl: 'views/marketing/product1.html'
          }
        }
      });

  }
})();