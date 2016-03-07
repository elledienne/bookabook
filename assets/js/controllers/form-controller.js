angular.module('bookalion')
.controller('formController', function ($scope) {

  $scope.goBack = function () {
    window.history.back();
  };

});
