/**
 * Created by Ruslan on 06/03/2016.
 */
'use strict';

angular.module('myApp.editContact', [])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/contacts/:id/edit', {
                controller: 'EditContactsCtrl',
                templateUrl: 'editContact/editContact.html'
            })
    }])

    .controller('EditContactsCtrl', ['$scope', '$filter','$location','$routeParams', 'ContactService', function($scope, $filter,$location, $routeParams, ContactService) {
        $scope.contactID = $routeParams.id;
        $scope.contacts = ContactService.getContacts();
        $scope.currentContact = $filter('filter')($scope.contacts, { _id: $scope.contactID })[0];

        $scope.saveUpdatedContact = function() {
            ContactService.updateContact($scope.currentContact);
            $location.path('/');
        }
    }]);