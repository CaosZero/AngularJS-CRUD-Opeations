export default ['$stateProvider', ($stateProvider) => {
    'use strict'
    $stateProvider
        .state(
            {
                name: 'Contacts',
                url: '/contacts',
                component: 'listContacts'
            }
        );
}];
