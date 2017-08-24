/**
 * Created by Ruslan on 06/03/2016.
 */
import * as angular from 'angular';
import "./addContact/addContact.module";
import "./editContact/editContact.module";
import "./listContacts/listContact.module";
import "./serviceContacts/serviceContacts.module";
import "./header/header.module";


angular.module(
    "myApp", [
        "ui.router",
        "ui.router.upgrade",
        "myApp.header",
        "myApp.serviceContacts",
        "myApp.listContacts",
        "myApp.editContact",
        "myApp.addContact"

    ])
    .config(["$locationProvider", "$urlServiceProvider", function ($locationProvider, $urlServiceProvider) {
        "use strict"
        $urlServiceProvider.rules.initial({state: "Contacts"});
        $locationProvider.html5Mode(true);
    }]);

