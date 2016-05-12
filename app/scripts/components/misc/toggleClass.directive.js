(function () {
  angular
    .module('app.components')
    .directive('toggleClass', toggleClass);

  function toggleClass () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.bind('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          element.toggleClass(attrs.toggleClass);
        });
      }
    };
  }
})();