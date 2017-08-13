/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "public/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ({

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(59);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.element(document).ready(function () {
  angular.bootstrap(document, ['myApp']);
}); /**
     * Created by Vasyunin
     */

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _addContact = __webpack_require__(60);

var _addContact2 = _interopRequireDefault(_addContact);

var _editContact = __webpack_require__(65);

var _editContact2 = _interopRequireDefault(_editContact);

var _listContact = __webpack_require__(70);

var _listContact2 = _interopRequireDefault(_listContact);

var _serviceContacts = __webpack_require__(78);

var _serviceContacts2 = _interopRequireDefault(_serviceContacts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Ruslan on 06/03/2016.
 */

exports.default = angular.module('myApp', ['ui.router', 'myApp.serviceContacts', 'myApp.listContacts', 'myApp.editContact', 'myApp.addContact']).config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
    'use strict';

    $locationProvider.html5Mode(true);
}]);

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _addContact = __webpack_require__(61);

var _addContact2 = _interopRequireDefault(_addContact);

var _addContact3 = __webpack_require__(62);

var _addContact4 = _interopRequireDefault(_addContact3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('myApp.addContact', []).config(_addContact2.default).component('addContact', _addContact4.default);

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ['$stateProvider', function ($stateProvider) {
    'use strict';

    $stateProvider.state({
        name: 'AddContact',
        url: '/contacts/add',
        component: 'addContact'
    });
}];

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _addContact = __webpack_require__(63);

var _addContact2 = _interopRequireDefault(_addContact);

var _addContactComponent = __webpack_require__(64);

var _addContactComponent2 = _interopRequireDefault(_addContactComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addContactComponent = {
    controller: _addContact2.default,
    template: _addContactComponent2.default
};

exports.default = addContactComponent;

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddContactsController = function () {
    function AddContactsController(ContactService, $location) {
        _classCallCheck(this, AddContactsController);

        this.ContactService = ContactService;
        this.$location = $location;
    }

    _createClass(AddContactsController, [{
        key: '$onInit',
        value: function $onInit() {
            this.newContact = {};
        }
    }, {
        key: 'addContact',
        value: function addContact() {
            this.ContactService.addContact(this.newContact);
            this.$location.path('/');
        }
    }]);

    return AddContactsController;
}();

exports.default = AddContactsController;


AddContactsController.$inject = ['ContactService', '$location'];

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

module.exports = "<form style=padding-left:4% class=\"col-md-8 form-horizontal\" role=form> <div class=form-group> <label class=control-label for=name>Name:</label> <div class=\"\"> <input type=text class=form-control id=name ng-model=$ctrl.newContact.name placeholder=\"Enter name\"> </div> </div> <div class=form-group> <label class=control-label for=Address>Address:</label> <div class=\"\"> <input type=email class=form-control id=Address ng-model=$ctrl.newContact.address placeholder=\"Enter Address\"> </div> </div> <div class=form-group> <label class=control-label for=phone>Phone:</label> <div class=\"\"> <input type=phone class=form-control id=phone ng-model=$ctrl.newContact.phone placeholder=\"Enter phone\"> </div> </div> <div class=form-group> <button type=button ng-click=$ctrl.addContact(); class=\"btn center-block btn-warning\">Add Contact </button> </div> </form> <div class=col-md-4> <img class=\"img-circle center-block\" width=220 height=220 src=http://www.corporalmente.com.br/wp-content/uploads/2013/10/profile_avatar_default.png alt=...> </div> ";

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editContact = __webpack_require__(66);

var _editContact2 = _interopRequireDefault(_editContact);

var _editContact3 = __webpack_require__(67);

var _editContact4 = _interopRequireDefault(_editContact3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('myApp.editContact', []).config(_editContact2.default).component('editContact', _editContact4.default);

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ['$stateProvider', function ($stateProvider) {
    'use strict';

    $stateProvider.state({
        name: 'EditContact',
        url: '/contacts/:id/edit',
        component: 'editContact',
        resolve: {
            id: ['$transition$', function ($transition$) {
                return $transition$.params().id;
            }]
        }
    });
}];

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editContact = __webpack_require__(68);

var _editContact2 = _interopRequireDefault(_editContact);

var _editContact3 = __webpack_require__(69);

var _editContact4 = _interopRequireDefault(_editContact3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editContactComponent = {
    controller: _editContact2.default,
    template: _editContact4.default,
    bindings: {
        id: '<'
    }
};

exports.default = editContactComponent;

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditContactController = function () {
    function EditContactController(ContactService, $location, $filter) {
        _classCallCheck(this, EditContactController);

        this.ContactService = ContactService;
        this.$location = $location;
        this.$filter = $filter;
    }

    _createClass(EditContactController, [{
        key: '$onInit',
        value: function $onInit() {
            this.contactID = this.id;
            this.contacts = this.ContactService.getContacts();
            this.currentContact = this.$filter('filter')(this.contacts, { _id: this.contactID })[0];
        }
    }, {
        key: 'saveUpdatedContact',
        value: function saveUpdatedContact() {
            this.ContactService.updateContact(this.currentContact);
            this.$location.path('/contacts');
        }
    }]);

    return EditContactController;
}();

exports.default = EditContactController;


EditContactController.$inject = ['ContactService', '$location', '$filter'];

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

module.exports = "<form style=padding-left:4% class=\"col-md-8 form-horizontal\" role=form> <div class=form-group> <label class=control-label for=name>Name:</label> <div class=\"\"> <input type=text class=form-control id=name ng-model=$ctrl.currentContact.name placeholder=\"Enter name\"> </div> </div> <div class=form-group> <label class=control-label for=Address>Address:</label> <div class=\"\"> <input type=text class=form-control id=Address ng-model=$ctrl.currentContact.address placeholder=\"Enter Address\"> </div> </div> <div class=form-group> <label class=control-label for=phone>Phone:</label> <div class=\"\"> <input type=phone class=form-control id=phone ng-model=$ctrl.currentContact.phone placeholder=\"Enter phone\"> </div> </div> <div class=form-group> <button type=button ng-click=$ctrl.saveUpdatedContact(); class=\"btn center-block btn-warning\">Save </button> </div> </form> <div class=col-md-4> <img class=\"img-circle center-block\" width=220 height=220 src=http://www.corporalmente.com.br/wp-content/uploads/2013/10/profile_avatar_default.png alt=...> </div> ";

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _listContact = __webpack_require__(71);

var _listContact2 = _interopRequireDefault(_listContact);

var _listContact3 = __webpack_require__(72);

var _listContact4 = _interopRequireDefault(_listContact3);

var _contactItem = __webpack_require__(75);

var _contactItem2 = _interopRequireDefault(_contactItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('myApp.listContacts', []).config(_listContact2.default).component('listContacts', _listContact4.default).component('contactItem', _contactItem2.default);

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ['$stateProvider', function ($stateProvider) {
    'use strict';

    $stateProvider.state({
        name: 'Contacts',
        url: '/contacts',
        component: 'listContacts'
    });
}];

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _listContact = __webpack_require__(73);

var _listContact2 = _interopRequireDefault(_listContact);

var _listContactComponent = __webpack_require__(74);

var _listContactComponent2 = _interopRequireDefault(_listContactComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListContacts = {
    controller: _listContact2.default,
    template: _listContactComponent2.default
};

exports.default = ListContacts;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListContactController = function () {
    function ListContactController(ContactService) {
        _classCallCheck(this, ListContactController);

        this.ContactService = ContactService;
    }

    _createClass(ListContactController, [{
        key: '$onInit',
        value: function $onInit() {
            this.contacts = this.ContactService.getContacts();
        }
    }, {
        key: 'deleteItem',
        value: function deleteItem(object) {
            this.ContactService.deleteContact(object._id);
        }
    }]);

    return ListContactController;
}();

ListContactController.$inject = ['ContactService'];

exports.default = ListContactController;

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

module.exports = "<div ng-repeat=\"currentContact in $ctrl.contacts\"> <contact-item contact=currentContact delete-item=$ctrl.deleteItem(currentContact)></contact-item> </div> ";

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _contactItemTemplate = __webpack_require__(76);

var _contactItemTemplate2 = _interopRequireDefault(_contactItemTemplate);

var _contactItem = __webpack_require__(77);

var _contactItem2 = _interopRequireDefault(_contactItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contactItem = {
    template: _contactItemTemplate2.default,
    bindings: {
        contact: '<',
        deleteItem: '&'
    },
    controller: _contactItem2.default
};

exports.default = contactItem;

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports = "<div class=media> <div class=\"media-left media-middle\"> <a href=#> <img class=media-object width=90 height=90 src=http://www.corporalmente.com.br/wp-content/uploads/2013/10/profile_avatar_default.png alt=...> </a> </div> <div class=media-body> <h4 class=media-heading> {{$ctrl.contact.name}}</h4> {{$ctrl.contact.address}} <div class=info> <a ui-sref=\"EditContact({id: $ctrl.contact._id})\">✔ EDIT</a> <a ng-click=$ctrl.deleteItem($ctrl.contact);>✖ DELETE</a> </div> </div> </div>";

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContactItemController = function () {
    function ContactItemController() {
        _classCallCheck(this, ContactItemController);
    }

    _createClass(ContactItemController, [{
        key: "deleteContact",
        value: function deleteContact(_passedContact) {
            this.deleteItem(_passedContact);
        }
    }]);

    return ContactItemController;
}();

exports.default = ContactItemController;

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _serviceContacts = __webpack_require__(79);

var _serviceContacts2 = _interopRequireDefault(_serviceContacts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('myApp.serviceContacts', []).service('ContactService', _serviceContacts2.default);

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContactService = function () {
    function ContactService() {
        _classCallCheck(this, ContactService);

        this.contacts = [{ _id: 1, name: 'Allan Benjamin', address: 'St. Claire Avenue, Nº 101', phone: '557188339933' }, { _id: 2, name: 'Georgia Smith', address: 'St. Claire Avenue, Nº 102', phone: '557188339933' }, { _id: 3, name: 'Gregory Levinsky', address: 'St. Claire Avenue, Nº 103', phone: '557188339933' }, { _id: 4, name: 'Jackeline Macfly', address: 'St. Claire Avenue, Nº 104', phone: '557188339933' }, { _id: 5, name: 'Joseph Climber', address: 'St. Claire Avenue, Nº 105', phone: '557188339933' }, { _id: 6, name: 'Joshua Jackson', address: 'St. Claire Avenue, Nº 106', phone: '557188339933' }];
    }

    _createClass(ContactService, [{
        key: 'getContacts',
        value: function getContacts() {
            return this.contacts;
        }
    }, {
        key: 'addContact',
        value: function addContact(contactObject) {
            this.contacts.push(contactObject);
        }
    }, {
        key: 'updateContact',
        value: function updateContact(item) {
            this.contacts = this.contacts.map(function (element) {
                if (element._id === item._id) {
                    element = item;
                }
                return element;
            });
        }
    }, {
        key: 'deleteContact',
        value: function deleteContact(index) {
            var _id = this.contacts.filter(function (element, pos) {
                if (element._id === index) {
                    element.pos = pos;
                    return element;
                }
            });

            if (_id.length > 0) {
                var item = this.contacts.splice(_id[0].pos, 1);
                if (_typeof(item[0]) === 'object') {
                    return item[0];
                }
            }
            return false;
        }
    }]);

    return ContactService;
}();

exports.default = ContactService;

/***/ })

/******/ });