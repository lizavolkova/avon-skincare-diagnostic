'use strict';

module.exports = /*@ngInject*/
  function questionsController($scope, configService, $stateParams, questionsService) {
    //get questions array
    $scope.questions = configService.getQuestions();

    $scope.Q1 = questionsService.getQ1();
    console.log( $scope.Q1);
   //console.log($scope.questions.branch);
    //set current question based of URL
    var currentQuestion = $stateParams.id;
    $scope.currentQuestion = $scope.questions[currentQuestion];

    //if branch = true, then currentQ = branchQuestions

    //if branch = false, currentQ = path1 Q1

    $scope.saveAnswer = function(id, result) {
    	console.log('question id: '+id+', answer product: '+result); 
    };
  };
