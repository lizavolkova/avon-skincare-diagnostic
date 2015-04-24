'use strict';

module.exports = /*@ngInject*/
  function bgImageDirective(/* inject dependencies here, i.e. : $rootScope */) {
    return function(scope, element, attrs){
        attrs.$observe('bgImage', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
            });
        });
    };
  };


