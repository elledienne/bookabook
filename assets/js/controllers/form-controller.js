angular.module('bookalion.controller.formcontroller', []).
controller('formController', ['$scope', '$state', 'FormFactory', function ($scope, $state, FormFactory) {

  $scope.formSetup = FormFactory.formSetup;
  $scope.formData = FormFactory.formData;
  $scope.navHandler = [true];
  $scope.formatDuration = FormFactory.formatDuration;

  var validate = {
    'date-zip': function () {
      var date = $scope.requestForm.date.$dirty;
      var time = $scope.requestForm.time.$isEmpty;
      var zip = $scope.requestForm.zip.$valid;
      console.log(date, time, zip)
      return date && time && zip;
    },
    'cleaning-details': function () {
      // as for date-zip
      // [...] 
    }
  };

  $scope.restoreDate = function () {
    if ($scope.formData.date) {
      var splitDate = $scope.formData.date.split('.');
      return splitDate[1] + '.' + splitDate[0] + '.' + splitDate[2];
    }
    return 'false';
  };

  $scope.togglePicker = function (popupName) {
    if (!$scope.formSetup.pickers[popupName]) {
      for (picker in $scope.formSetup.pickers) {
        $scope.formSetup.pickers[picker] = false;
      }
    } 
    $scope.formSetup.pickers[popupName] = !$scope.formSetup.pickers[popupName];
  };

  $scope.goBack = function () {
    if ($scope.formSetup.nav.prev.length) {
      var prev = $scope.formSetup.nav.prev.pop();
      $scope.formSetup.nav.next.push($scope.formSetup.nav.curr.pop());
      $scope.formSetup.nav.curr.push(prev);
      $scope.navHandler.pop();
      $state.go('^.' + prev);
    }
  };

  $scope.goNext = function () {
    if ($scope.formSetup.nav.next.length) {
      if (!validate[$scope.formSetup.nav.curr[0]]()){
        return;
      }

      var next = $scope.formSetup.nav.next.shift();
      $scope.formSetup.nav.prev.push($scope.formSetup.nav.curr.pop());
      $scope.formSetup.nav.curr.push(next);
      $scope.navHandler.push(true);
      $state.go('^.' + next);
    } else {
      FormFactory.showData($scope.formData);
    }
  }

}]);
