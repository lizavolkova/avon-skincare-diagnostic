'use strict';

module.exports = /*@ngInject*/
  function questionsController($scope, configService, $stateParams) {
    $scope.welcome = 'This is the questions controller!';
    $scope.questions = configService.getQuestions();
    var currentQuestion = $stateParams.id;
    console.log($scope.questions);
    
    $scope.currentQuestion = $scope.questions[currentQuestion];

    $scope.saveAnswer = function(id, result) {
    	console.log('question id: '+id+', answer product: '+result); 
    };
  };
