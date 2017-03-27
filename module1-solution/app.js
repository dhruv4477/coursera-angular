(function() {
    'use strict';

    angular.module('LaunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
        LunchCheckController.$inject = ['$scope'];
        function LunchCheckController($scope)
        {
          $scope.inputData="";
          $scope.message="";
          $scope.checkIfTooMuch=function(){
            var inputLocal = $scope.inputData;
              $scope.message = getResponse(inputLocal);

          };

         function getResponse(input)
          {
            if(!input)
            {
                return "Please enter data first";
            }
            else {
              var splitArray = input.split(",");
              if(splitArray.length>3)
              {
                return "Too much!";
              }
              else {
                return "Enjoy!";
              }
            }

          };
        };
})();
