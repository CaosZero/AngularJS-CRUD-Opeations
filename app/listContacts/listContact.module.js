import Config from './listContact.config';
import ListContacts from './listContact.component';
import ContactItem from './contactItem/contactItem.component';


export default angular.module('myApp.listContacts', [])
    .config(Config)
    .component('listContacts', ListContacts)
    .component('contactItem', ContactItem);