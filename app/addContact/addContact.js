/**
 * Created by Ruslan on 06/03/2016.
 */
angular.module('myApp.addContact', [])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/contacts/add', {
                controller: 'AddContactsCtrl',
                templateUrl: 'addContact/addContact.html'
            })
    }])

    .controller('AddContactsCtrl', ['$scope','$location', 'ContactService', function($scope,$location, ContactService) {
        $scope.newContact = {};
        $scope.addNewContact = function() {
            ContactService.addContact($scope.newContact);
            $location.path('/');
        }

    }]);