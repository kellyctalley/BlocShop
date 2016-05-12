'use strict';

(function () {
  angular.module('app.marketing').directive('bsMarketingProduct', bsMarketingProduct);

  function bsMarketingProduct() {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/marketing/product.html',
      controllerAs: '$ctrl',
      controller: ['$stateParams', 'Product', ProductCtrl]
    };

    function ProductCtrl($stateParams, Product) {
      var vm = this;

      vm.product = Product.get({ id: $stateParams.id });
    }
  }
})();
//# sourceMappingURL=marketingProduct.directive.js.map
