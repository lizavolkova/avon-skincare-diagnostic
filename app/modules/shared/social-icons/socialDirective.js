'use strict';

module.exports = /*@ngInject*/
  function socialDirective(configService) {
    return {
    	restrict: 'A',
      replace: 'true',
      link: function (scope, element) {
        // Do something awesome
        //console.log(configService.getSocial());
      },
      templateUrl: 'shared/social-icons/social-icons.html'
    };
  };
