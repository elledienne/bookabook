angular.module('bookalion')
.controller('formController', function ($scope, $state) {

  $scope.formSetup = {
    times: [],
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
    frequencies: [
      {freq: 'once', best: false, price: 'from 14,90 €/h'},
      {freq: 'weekly', best: false, price: 'from 13,90 €/h'},
      {freq: 'every 2 weeks', best: true, price: 'from 13,90 €/h'},
      {freq: 'every 4 weeks', best: false, price: 'from 13,90 €/h'}
    ],
    pickers: {
      time: false,
      duration: false,
      frequency: false
    },
    nav: {
      next: ['cleaning-details'],
      curr: ['date-zip'],
      prev: []
    }
  };

  $scope.formData = {
    date: null,
    time: {
      value: null,
      isFlexible: false,
    },
    zip: null,
    duration: null,
    frequency: null
  };

  $scope.navHandler = [true];

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

  var showData = function () {
    alert(JSON.stringify($scope.formData, null, 2))
  }

  var validate = {
    'date-zip': function () {
      var date = $scope.requestForm.date.$dirty;
      var time = $scope.requestForm.time.$isEmpty;
      var zip = $scope.requestForm.zip.$valid;
      console.log(date, time, zip)
      return date && time && zip;
    },
    'cleaning-details': function () {

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
    // console.log(popupName, !$scope.formSetup.pickers[popupName])
    if (!$scope.formSetup.pickers[popupName]) {
      for (picker in $scope.formSetup.pickers) {
        $scope.formSetup.pickers[picker] = false;
      }
    } 
    $scope.formSetup.pickers[popupName] = !$scope.formSetup.pickers[popupName];
  };

  $scope.goBack = function () {
    console.log($scope.formSetup.nav.prev)
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
      showData();
    }
  }

  $scope.formatDuration = function () {
    var h = $scope.formData.duration;
    if (h) {
      h += 'h';
    }
    return h;
  }


});
