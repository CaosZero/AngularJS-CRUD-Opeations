/**
 * Created by Ruslan on 06/03/2016.
 */

export default class EditContactController {
    constructor(ContactService, $routeParams, $location, $filter) {
        this.ContactService = ContactService;
        this.$routeParams = $routeParams;
        this.$location = $location;
        this.$filter = $filter;
    }

    $onInit() {
        this.contactID = this.$routeParams.id;
        this.contacts = this.ContactService.getContacts();
        this.currentContact = this.$filter('filter')(this.contacts, {_id: this.contactID})[0];
    }

    saveUpdatedContact() {
        this.ContactService.updateContact(this.currentContact);
        this.$location.path('/');
    }
}

EditContactController.$inject = ['ContactService', '$routeParams', '$location', '$filter'];