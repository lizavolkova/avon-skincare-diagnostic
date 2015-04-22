'use strict';

module.exports = /*@ngInject*/
  function productDetailDirective(/* inject dependencies here, i.e. : $rootScope */) {
    return {
      link: function (scope, element) {
        // Do something awesome
        
      },
      templateUrl: 'shared/productDetail/productDetail.html'
    };
  };
