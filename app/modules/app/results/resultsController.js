'use strict';

module.exports = /*@ngInject*/
  function resultsController($scope, configService) {
    $scope.welcome = 'This is the results controller!';
    $scope.results = [
         { questionId: 0, prodId: 898222 },
        { questionId: 1, prodId: 485921 }];
    //	$scope.ctrlProducts = 'products scope from resultsController';

    //$scope.productInfo = configService.getProductInfo();
    //console.log($scope.productInfo);
  };
