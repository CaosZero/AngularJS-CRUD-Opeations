/**
 * Created by Ruslan on 06/03/2016.
 */
angular.module('myApp.serviceContacts', [])
    .factory('ContactService', [function() {
        var contactsService = {};

        var contacts = [
            { _id: 1, name: 'Allan Benjamin', address: 'St. Claire Avenue, Nº 101', phone: '557188339933' },
            { _id: 2, name: 'Georgia Smith', address: 'St. Claire Avenue, Nº 102', phone: '557188339933' },
            { _id: 3, name: 'Gregory Levinsky', address: 'St. Claire Avenue, Nº 103', phone: '557188339933' },
            { _id: 4, name: 'Jackeline Macfly', address: 'St. Claire Avenue, Nº 104', phone: '557188339933' },
            { _id: 5, name: 'Joseph Climber', address: 'St. Claire Avenue, Nº 105', phone: '557188339933' },
            { _id: 6, name: 'Joshua Jackson', address: 'St. Claire Avenue, Nº 106', phone: '557188339933' }
        ];

        contactsService.getContacts = function() {
            return contacts;
        };


        contactsService.addContact = function(contactObject) {
            contacts.push(contactObject);
        };

        contactsService.updateContact = function(item){
            contacts = contacts.map( function (element) {
                if ( element._id === item._id){
                    element = item;
                }
                return element;
            });
        };

        contactsService.deleteContact = function(index) {
            var _id = contacts.filter( function (element, pos) {
                if ( element._id === index){
                    element.pos = pos;
                    return element;
                }
            });

            if (_id.length > 0) {
                var item = contacts.splice(_id[0].pos, 1);
                if (typeof item[0] ===  'object') {
                    return item[0];
                }
            }
            return false;
        };


        return contactsService;

    }]);