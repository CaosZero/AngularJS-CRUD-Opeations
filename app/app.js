/**
 * Created by Ruslan on 06/03/2016.
 */
'use strict';


// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.serviceContacts',
  'myApp.listContacts',
  'myApp.editContact',
  'myApp.addContact',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
