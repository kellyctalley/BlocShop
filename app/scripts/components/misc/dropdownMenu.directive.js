(function () {
  angular
    .module('app.components')
    .directive('bsDropdownMenu', bsDropdownMenu);

  function bsDropdownMenu () {
    return {
      restrict: 'E',
      scope: {
        title: '@'
      },
      bindToController: true,
      transclude: true,
      replace: true,
      templateUrl: 'views/components/misc/dropdown-menu.html',
      controllerAs: '$ctrl',
      controller: [DropdownMenuCtrl]
    };

    function DropdownMenuCtrl () {
      var vm = this;

      // vm.dropdownMenuTitle = title;

    }
  }
})();
