export default class ContactService {

    constructor() {
        this.contacts = [
            {_id: 1, name: 'Allan Benjamin', address: 'St. Claire Avenue, Nº 101', phone: '557188339933', books: []},
            {_id: 2, name: 'Georgia Smith', address: 'St. Claire Avenue, Nº 102', phone: '557188339933', books: []},
            {_id: 3, name: 'Gregory Levinsky', address: 'St. Claire Avenue, Nº 103', phone: '557188339933', books: []},
            {_id: 4, name: 'Jackeline Macfly', address: 'St. Claire Avenue, Nº 104', phone: '557188339933', books: []},
            {_id: 5, name: 'Joseph Climber', address: 'St. Claire Avenue, Nº 105', phone: '557188339933', books: []},
            {_id: 6, name: 'Joshua Jackson', address: 'St. Claire Avenue, Nº 106', phone: '557188339933', books: []}
        ];
    }


    getContacts() {
        return this.contacts;
    }


    addContact(contactObject) {
        this.contacts.push(contactObject);
    }

    updateContact(item) {
        this.contacts = this.contacts.map(function (element) {
            if (element._id === item._id) {
                element = item;
            }
            return element;
        });
    }

    deleteContact(index) {
        var _id = this.contacts.filter(function (element, pos) {
            if (element._id === index) {
                element.pos = pos;
                return element;
            }
        });

        if (_id.length > 0) {
            var item = this.contacts.splice(_id[0].pos, 1);
            if (typeof item[0] === 'object') {
                return item[0];
            }
        }
        return false;
    }

    hasReadBook(contactObject, book) {
        this.contacts = this.contacts.map(function (element) {
            if (element._id === item._id) {
                element = item;
                element.books.push(book);
            }
            return element;
        });
    }
}