angular.module('bookalion')
.controller('formController', function ($scope) {

  $scope.formSetup = {
    times: [],
    // isTimePickerVisible: false,
    durations: [
      {h:'2.5', desc:'Quick cleaning'},
      {h:'3', desc: null},
      {h:'3,5', desc:'Mid-sized flat'},
      {h:'4', desc: null},
      {h:'4.5', desc: null},
      {h:'5', desc: null},
      {h:'5.5', desc:'Big flat'},
      {h:'6', desc: null},
      {h:'7', desc: null},
      {h:'8', desc: null}
    ],
    frequencies: ['once', 'weekly'],
    timePicker: false
  };

  $scope.formData = {
    date: null,
    time: {
      value: null,
      isFlexible: false,
    },
    zip: null
  };

  $scope.restoreDate = function () {
    if ($scope.formData.date) {
      var splitDate = $scope.formData.date.split('.');
      return splitDate[1] + '.' + splitDate[0] + '.' + splitDate[2];
    }
    return 'false';
  };

  $scope.togglePicker = function (popupName) {
    console.log(popupName)
    $scope.formSetup[popupName] = !$scope.formSetup[popupName];
  };

  $scope.goBack = function () {
    window.history.back();
  };

  var populateTimes = function () {
    var startTime = 6;
    var endTime = 23;
    var minutesOptions = ['00', '30'];

    for (startTime; startTime <= endTime; startTime++) {
      for (var counter = 0; counter < 2; counter++) {
        var hour = startTime.toString().length === 1 ? '0' + startTime : startTime;
        var minutes = counter === 0 ? '00' : '30';

        $scope.formSetup.times.push(hour + ':' + minutes);
      }
    }
  }();

  var validate = {
    'date-zip': function () {
      var date = $scope.requestForm.date.$dirty;
      var time = $scope.requestForm.time.$dirty;
      var zip = $scope.requestForm.zip.$valid;
      // console.log(date, time, zip)
      return date && time && zip;
    },
    'cleaning-details': function () {

    }
  };

  $scope.formatDuration = function (data) {
    var result = data.h + 'h';
    if (data.desc) {
      result += ' (' + data.desc + ')'; 
    }
    return result;
  }


  $scope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {

    var pageName = fromState.name.split('.')[1];

    if (!validate[pageName]()){
      e.preventDefault();
    } else {
      console.log($scope.formData);
    }
    // } else if (toState.module === 'public' && $cookies.Session) {
    //     // If logged in and transitioning to a logged out page:
    //     e.preventDefault();
    //     $state.go('tool.suggestions');
    // };
  });


});
