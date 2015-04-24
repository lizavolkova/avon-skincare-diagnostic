'use strict';

module.exports = /*@ngInject*/
  function questionsService(configService) {
  	var configs = configService.getQuestions();
  return {
  	getBranch: function() {
  		return configs.branch;
  	},
  	getQ1: function() {
  		if (configs.branch === true) {
  			return configs.branchQuestion;
  		} else {
  			return 'no branch question';
  		}
  	}
    };
  };
