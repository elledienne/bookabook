angular.module('bookalion.factories.formfactory', []).
factory('FormFactory', function() {
   
  var formSetup = {
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

  var formData = {
    date: null,
    time: {
      value: null,
      isFlexible: false,
    },
    zip: null,
    duration: null,
    frequency: null
  };

  var populateTimes = function () {
    var startTime = 6;
    var endTime = 23;
    var minutesOptions = ['00', '30'];

    for (startTime; startTime <= endTime; startTime++) {
      for (var counter = 0; counter < 2; counter++) {
        var hour = startTime.toString().length === 1 ? '0' + startTime : startTime;
        var minutes = counter === 0 ? '00' : '30';

        formSetup.times.push(hour + ':' + minutes);
      }
    }
  }();

  var showData = function (data) {
    alert(JSON.stringify(data, null, 2))
  };

  var formatDuration = function (h) {
    if (h) {
      h += 'h';
    }
    return h;
  };

  return {
    formSetup: formSetup,
    formData: formData,
    showData: showData,
    formatDuration: formatDuration
  };

 });
