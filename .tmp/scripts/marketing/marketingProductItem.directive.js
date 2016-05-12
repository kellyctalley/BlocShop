'use strict';

(function () {
  angular.module('app.marketing').directive('bsMarketingProductItem', bsMarketingProductItem);

  function bsMarketingProductItem() {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/marketing/partials/_product-item.html',
      controllerAs: '$ctrl',
      controller: ['Product', ProductItemCtrl]
    };

    function ProductItemCtrl(Product) {
      var vm = this;

      vm.products = Product.query();
    }
  }
})();
//# sourceMappingURL=marketingProductItem.directive.js.map
