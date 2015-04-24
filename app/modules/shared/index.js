'use strict';

module.exports =
  angular.module('skincareDiagnostic.shared', [
    require('./ui-elements').name,
    require('./filters').name,
    require('./services').name,
    require('./header').name,
    require('./footer').name,
    require('./social-icons').name,
    require('./productDetail').name
  ]);
