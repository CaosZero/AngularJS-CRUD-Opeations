import {Config} from './addContact.config';
import AddContactComponent from 'addContact.component';

export default angular.module('myApp.addContact', [])
    .config(Config)
    .component('AddContact', AddContactComponent);