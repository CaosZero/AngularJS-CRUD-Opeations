import EditContactController from './editContact.controller';
import EditContactTemplate from './editContact.html';

let editContactComponent = {
    controller: EditContactController,
    template: EditContactTemplate,
    bindings: {
        id: '<'
    }
};

export default editContactComponent;