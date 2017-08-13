import ContactItemTemplate from './contactItem.template.html';
import ContactItemController from './contactItem.controller';

let contactItem = {
    template: ContactItemTemplate,
    bindings: {
        contact: '<',
        deleteItem: '&'
    },
    controller: ContactItemController
};

export default contactItem;