'use strict';

(function () {
  angular.module('app.marketing').directive('bsMarketingProductList', bsMarketingProductList);

  function bsMarketingProductList() {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/marketing/partials/_product-list.html',
      controllerAs: '$ctrl',
      controller: [ProductListCtrl]
    };

    function ProductListCtrl() {
      var vm = this;
    }
  }
})();
//# sourceMappingURL=marketingProductList.directive.js.map
