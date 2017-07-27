export default ['$routeProvider', ($routeProvider) => {
    'use strict'
    $routeProvider.when('/contacts/:id/edit', {
        controller: 'EditContactsCtrl',
        templateUrl: 'editContact/editContact.html'
    });
}];