export default ['$routeProvider', ($routeProvider) => {
    'use strict'
    $routeProvider
        .when('/contacts/add', {
            controller: 'AddContactsCtrl',
            templateUrl: 'addContact/addContact.html'
        });
}];