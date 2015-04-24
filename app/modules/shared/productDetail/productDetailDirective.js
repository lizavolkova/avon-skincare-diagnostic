'use strict';

module.exports = /*@ngInject*/
  function productDetailDirective(/* inject dependencies here, i.e. : $rootScope */) {
    return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'shared/productDetail/productDetail.html',
      scope: {
      	fsc: '@'
      },
      link: function (scope, element, attrs) {
        // Do something awesome
        //scope.fsc = attrs.fsc;
        //console.log(scope.products[0]);

        element.bind("mouseenter", function() {
        	element.addClass('hover');
        });
        element.bind("mouseleave", function() {
        	element.removeClass('hover');
        });
      },
      controller: function($scope, configService) {
        $scope.products = configService.getProducts();
        //console.log($scope.test);
      }
      
    };
  };
