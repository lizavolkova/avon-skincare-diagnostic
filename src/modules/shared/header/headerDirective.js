'use strict';

module.exports = /*@ngInject*/
  function headerDirective(/* inject dependencies here, i.e. : $rootScope */) {
    return {
      link: function (scope, element) {
        // Do something awesome
      },
      template: '<div>This is the header</div>'
    };
  };
