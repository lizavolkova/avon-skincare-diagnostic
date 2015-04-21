'use strict';

module.exports = /*@ngInject*/
  function footerDirective(/* inject dependencies here, i.e. : $rootScope */) {
    return {
      link: function (scope, element) {
        // Do something awesome
      },
      template: '<div>This is  footer</div>'
    };
  };
