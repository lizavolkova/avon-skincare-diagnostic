'use strict';

module.exports = /*@ngInject*/
  function questionsService(configService) {
    //get questions object from initial API call
  	var questions = configService.getQuestions();

  return {
    getQuestion: function(value) {
      if(value === '0') {
        if (questions.branch === true) {
          //return 'on the first question, and branch exists';
          return questions.branchQuestion;
        } else {
          //return 'on the first question and branch does not exist, so return first question for path1';
          return questions.path1.questions[0];
        }

      } else {
        //return 'not on the first question';
        return questions.path2.questions[0];
      }
    }
    };
  };
