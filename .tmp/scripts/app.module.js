'use strict';

(function () {

  // Components Module
  angular.module('app.components', []);

  // Marketing Module
  angular.module('app.marketing', []);

  // Define main module.
  angular.module('app', ['ngSanitize', 'ngResource', 'ui.router', 'angular-click-outside', 'app.components', 'app.marketing']);
})();
//# sourceMappingURL=app.module.js.map
