'use strict';

module.exports = /*@ngInject*/
  function productDetailDirective(/* inject dependencies here, i.e. : $rootScope */) {
    return {
      restrict: 'AE',
      replace: 'true',
      scope: {
      	fsc: '@'
      },
      link: function (scope, element, attrs) {
        // Do something awesome
        //scope.fsc = attrs.fsc;

        element.bind("mouseenter", function() {
        	element.addClass('hover');
        });
        element.bind("mouseleave", function() {
        	element.removeClass('hover');
        });
      },
      templateUrl: 'shared/productDetail/productDetail.html'
    };
  };
