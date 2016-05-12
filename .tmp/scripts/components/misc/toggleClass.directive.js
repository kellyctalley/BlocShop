'use strict';

(function () {
  angular.module('app.components').directive('toggleClass', toggleClass);

  function toggleClass() {
    return {
      restrict: 'A',
      link: function link(scope, element, attrs) {
        element.bind('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          element.toggleClass(attrs.toggleClass);
        });
      }
    };
  }
})();
//# sourceMappingURL=toggleClass.directive.js.map
