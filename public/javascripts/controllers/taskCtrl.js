(function() {
  'use strict';

  /**
  * Home Controller
  *
  * Description
  */
  angular.module('App')
  .controller('taskCtrl', ['$scope','$http', function($scope,$http){
    //$scope.passMatch = true;
    $scope.formSubmit = function(tsk){
      console.log(tsk);
      //if(reg.password===reg.password2){
      //  $scope.passMatch = true;
        $http({
          method: 'POST',
          url: '/index/task',
          data : tsk
        }).then(function successCallback(response) {
            console.log(response);
          }, function errorCallback(response) {
            console.log(response);
          });
      //}else{
      //  $scope.passMatch = false;
      //}
      
    }



  }]);
})();