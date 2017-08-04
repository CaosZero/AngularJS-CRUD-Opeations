import Config from './editContact.config';
import EditContactComponent from './editContact.component';

export default angular.module('myApp.editContact', [])
    .config(Config)
    .component('editContact', EditContactComponent);