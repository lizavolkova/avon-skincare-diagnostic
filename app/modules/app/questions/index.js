'use strict';

module.exports =
  angular.module('skincareDiagnostic.questions', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  
  .controller('questionsController', require('./questionsController'));
