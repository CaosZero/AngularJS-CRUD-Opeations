/**
 * Created by Ruslan on 06/03/2016.
 */
'use strict';

'use strict';

angular.module('myApp.listContacts', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/contacts', {
                templateUrl: 'listContacts/listContact.html',
                controller: 'ContactsCtrl'
            })
    }])

    .controller('ContactsCtrl', ['$scope','ContactService', function($scope,ContactService) {
        $scope.contacts = ContactService.getContacts();

        $scope.deleteItem = function(_id){
            ContactService.deleteContact(_id);
        }
    }]);