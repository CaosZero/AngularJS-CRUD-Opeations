export default class AddContactsController {

    constructor(ContactService, $location) {
        this.ContactService = ContactService;
        this.$location = $location;
    }

    $onInit() {
        this.newContact = {};
    }

    addContact() {
        this.ContactService.add(this.newContact);
        this.$location.path('/');
    }
}

AddContactsController.$inject = ['ContactService', '$location'];



