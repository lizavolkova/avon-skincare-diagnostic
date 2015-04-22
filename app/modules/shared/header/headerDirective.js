'use strict';

module.exports = /*@ngInject*/
  function headerDirective(/* inject dependencies here, i.e. : $rootScope */) {
    return {
      link: function (scope, element) {
        // Do something awesome
      },
      templateUrl: 'shared/header/header.html'
    };
  };
