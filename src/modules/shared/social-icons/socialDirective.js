'use strict';

module.exports = /*@ngInject*/
  function socialDirective(/* inject dependencies here, i.e. : $rootScope */) {
    return {
      link: function (scope, element) {
        // Do something awesome
      },
      templateUrl: 'shared/social-icons/social-icons.html'
    };
  };
