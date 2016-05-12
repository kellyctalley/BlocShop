(function () {
  angular
    .module('app.marketing')
    .factory('Product', ['$resource', Product]);

  function Product ($resource) {
    return $resource(
      'https://sheetsu.com/apis/v1.0/eb74a9e0/',
      { id: '@id' },
      {
        'query': {
          method: 'GET',
          isArray: true
        },
        'get': {
          method: 'GET',
          url: 'https://sheetsu.com/apis/v1.0/eb74a9e0/id/:id',
          isArray: true
        }
      }
    );
  };
})();
