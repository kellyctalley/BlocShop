(function () {

  // Marketing Module
  angular.module('app.marketing', []);

  // Define main module.
  angular.module('app', [
    'ngSanitize',
    'ngResource',
    'ui.router',
    'angular-click-outside',
    'app.marketing'
  ]);
})();
