class ListContactController {

    constructor(ContactService) {
        this.ContactService = ContactService;
    }

    $onInit() {
        this.contacts = this.ContactService.getContacts();
    }


    deleteItem(object) {
        this.ContactService.deleteContact(object._id);
    }
}

ListContactController.$inject = ['ContactService'];

export default ListContactController;