angular.module('bookalion', [
  'bookalion.controller.formcontroller',
  'bookalion.factories.formfactory',
  'ui.router',
  '720kb.datepicker'
])
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    
    $stateProvider  
      // route to show form
      .state('form', {
          url: '/form',
          templateUrl: 'assets/templates/form.html',
          controller: 'formController'
      })
      
      .state('form.date-zip', {
          url: '/date-zip',
          templateUrl: 'assets/templates/form-date-zip.html'
      })
      
      .state('form.cleaning-details', {
          url: '/cleaning-details',
          templateUrl: 'assets/templates/form-cleaning-details.html'
      });

    // default
    $urlRouterProvider.otherwise('/form/date-zip');

}]);
