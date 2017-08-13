/**
 * Created by Ruslan on 06/03/2016.
 */
import * as angular from 'angular';
import AddContactModule from "./addContact/addContact.module";
import EditContactModule from "./editContact/editContact.module";
import ListContactsModule from "./listContacts/listContact.module";
import ServiceContact from "./serviceContacts/serviceContacts.module";
import AppHeader from "./header/header.module";


angular.module(
    "myApp", [
        "ui.router",
        "ui.router.upgrade",
        "myApp.serviceContacts",
        "myApp.header",
        "myApp.listContacts",
        "myApp.editContact",
        "myApp.addContact"
    ])
    .config(["$locationProvider", "$urlServiceProvider", function ($locationProvider, $urlServiceProvider) {
        "use strict"
        $urlServiceProvider.rules.initial({state: "Contacts"});
        $locationProvider.html5Mode(true);
    }]);

