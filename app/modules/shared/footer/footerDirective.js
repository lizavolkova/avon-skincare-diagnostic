'use strict';

module.exports = /*@ngInject*/
  function footerDirective(/* inject dependencies here, i.e. : $rootScope */) {
    return {
      restrict: 'A',
      replace: 'true',
      link: function (scope, element) {
        // Do something awesome
      },
      templateUrl: 'shared/footer/footer.html'
    };
  };
