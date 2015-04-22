'use strict';

module.exports = /*@ngInject*/
  function resultsController($scope, configService) {
    $scope.welcome = 'This is the results controller!';
    $scope.results = [
        { questionId: 0, prodId: 123 },
        { questionId: 1, prodId: 246 }];
    $scope.productInfo = configService.getProductInfo();

  };
