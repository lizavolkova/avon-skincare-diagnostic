'use strict';

module.exports = /*@ngInject*/
  function questionsController($scope, configService, $stateParams, questionsService) {

    //set current question based of URL
    //var currentQuestion = $stateParams.id;
    //$scope.currentQuestion = $scope.questions[currentQuestion];
    console.log($stateParams.id);
    
    $scope.currentQuestion = questionsService.getQuestion($stateParams.id);
    console.log($scope.currentQuestion);



    $scope.saveAnswer = function(id, result) {
    	console.log('question id: '+id+', answer product: '+result); 
    };
  };
 