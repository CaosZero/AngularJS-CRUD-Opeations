/**
 * Created by Ruslan on 06/03/2016.
 */

import AddContactModule from './addContact/addContact.module';
import EditContactModule from './editContact/editContact.module';
import ListContactsModule from './listContacts/listContact.module';
import ServiceContact from './serviceContacts/serviceContacts.module';
import AppHeader from './header/header.module';

import AppContactsStyle from './app.css';

export default angular.module(
    'myApp', [
        'ui.router',
        'myApp.serviceContacts',
        'myApp.header',
        'myApp.listContacts',
        'myApp.editContact',
        'myApp.addContact'
    ])
    .config(['$locationProvider','$stateProvider', function ($locationProvider,$stateProvider) {
        'use strict'
        $locationProvider.html5Mode(true);
    }]);