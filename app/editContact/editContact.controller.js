export default class EditContactController {
    constructor(ContactService, $location, $filter) {
        this.ContactService = ContactService;
        this.$location = $location;
        this.$filter = $filter;
    }

    $onInit() {
        this.contactID = this.id;
        this.contacts = this.ContactService.getContacts();
        this.currentContact = this.$filter('filter')(this.contacts, {_id: this.contactID})[0];
    }

    saveUpdatedContact() {
        this.ContactService.updateContact(this.currentContact);
        this.$location.path('/');
    }
}

EditContactController.$inject = ['ContactService', '$location', '$filter'];