import ContactItemTemplate from './contactItem.template.html';
import ContactItemController from './contactItem.controller';

let contactItem = {
    templateUrl: 'listContacts/contactItem/contactItem.template.html',
    bindings: {
        contact: '<',
        deleteItem: '&'
    },
    controller: ContactItemController
};

export default contactItem;