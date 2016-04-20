(function () {
  angular
    .module('app.marketing')
    .directive('bsMarketingHomepage', bsMarketingHomepage);

  function bsMarketingHomepage () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/marketing/homepage.html',
      controllerAs: '$ctrl',
      controller: [HomepageCtrl]
    };

    function HomepageCtrl () {
      var vm = this;

      // Add Class

      vm.classIsActive = false;

      vm.clickToggleClass = function () {
        vm.classIsActive = !vm.classIsActive;
      }

    }
  }
})();
