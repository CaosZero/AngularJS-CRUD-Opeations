export default ['$stateProvider', ($stateProvider) => {
    'use strict'
    $stateProvider
        .state(
            {
                name: 'AddContact',
                url: '/contacts/add',
                component: 'addContact'
            }
        );
}];