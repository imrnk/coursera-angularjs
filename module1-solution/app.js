(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
      $scope.items = "";
      $scope.message =  "";
      $scope.state = {};
      $scope.state.color = "green";
      $scope.state.bordercolor = "border-green";

      $scope.checkIfTooMuch =  function(){
        var m = "";
        var items = $scope.items;

        var itemToken = items.split(',');
        var emptyTokensCount = numOfEmptyTokens(itemToken);
        if(itemToken == "") {
          m = "Please enter data first";
          $scope.state.color = "red";
          $scope.state.bordercolor = "border-red";
        }
        else if(itemToken.length - emptyTokensCount > 3)  m = "Too Much!";
        else m = "Enjoy";
        $scope.message = m;
      };

      function numOfEmptyTokens(tokens) {
        var emptyTknCounts = 0;
        for(var i = 0; i < tokens.length; i++){
          if(tokens[i].trim().length==0){
            emptyTknCounts++;
            }
        }
        return emptyTknCounts;
      }



  }
})()
