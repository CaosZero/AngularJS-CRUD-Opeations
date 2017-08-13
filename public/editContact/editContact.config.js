export default ['$stateProvider', ($stateProvider) => {
    'use strict'
    $stateProvider
        .state(
            {
                name: 'EditContact',
                url: '/contacts/:id/edit',
                component: 'editContact',
                resolve: {
                    id: ['$transition$', function ($transition$) {
                        return $transition$.params().id;
                    }]
                }
            }
        );
}];