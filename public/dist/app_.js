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
/******/ (Array(58).concat([
/* 58 */
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
/* 59 */
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

var _app = __webpack_require__(80);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('myApp', ['ui.router', 'myApp.serviceContacts', 'myApp.listContacts', 'myApp.editContact', 'myApp.addContact']).config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
    'use strict';

    $locationProvider.html5Mode(true);
}]); /**
      * Created by Ruslan on 06/03/2016.
      */

/***/ }),
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
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
/* 64 */
/***/ (function(module, exports) {

module.exports = "<form style=padding-left:4% class=\"col-md-8 form-horizontal\" role=form> <div class=form-group> <label class=control-label for=name>Name:</label> <div class=\"\"> <input type=text class=form-control id=name ng-model=$ctrl.newContact.name placeholder=\"Enter name\"> </div> </div> <div class=form-group> <label class=control-label for=Address>Address:</label> <div class=\"\"> <input type=email class=form-control id=Address ng-model=$ctrl.newContact.address placeholder=\"Enter Address\"> </div> </div> <div class=form-group> <label class=control-label for=phone>Phone:</label> <div class=\"\"> <input type=phone class=form-control id=phone ng-model=$ctrl.newContact.phone placeholder=\"Enter phone\"> </div> </div> <div class=form-group> <button type=button ng-click=$ctrl.addContact(); class=\"btn center-block btn-warning\">Add Contact </button> </div> </form> <div class=col-md-4> <img class=\"img-circle center-block\" width=220 height=220 src=http://www.corporalmente.com.br/wp-content/uploads/2013/10/profile_avatar_default.png alt=...> </div> ";

/***/ }),
/* 65 */
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
/* 66 */
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
/* 67 */
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
/* 68 */
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
/* 69 */
/***/ (function(module, exports) {

module.exports = "<form style=padding-left:4% class=\"col-md-8 form-horizontal\" role=form> <div class=form-group> <label class=control-label for=name>Name:</label> <div class=\"\"> <input type=text class=form-control id=name ng-model=$ctrl.currentContact.name placeholder=\"Enter name\"> </div> </div> <div class=form-group> <label class=control-label for=Address>Address:</label> <div class=\"\"> <input type=text class=form-control id=Address ng-model=$ctrl.currentContact.address placeholder=\"Enter Address\"> </div> </div> <div class=form-group> <label class=control-label for=phone>Phone:</label> <div class=\"\"> <input type=phone class=form-control id=phone ng-model=$ctrl.currentContact.phone placeholder=\"Enter phone\"> </div> </div> <div class=form-group> <button type=button ng-click=$ctrl.saveUpdatedContact(); class=\"btn center-block btn-warning\">Save </button> </div> </form> <div class=col-md-4> <img class=\"img-circle center-block\" width=220 height=220 src=http://www.corporalmente.com.br/wp-content/uploads/2013/10/profile_avatar_default.png alt=...> </div> ";

/***/ }),
/* 70 */
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
/* 71 */
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
/* 72 */
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
/* 73 */
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
/* 74 */
/***/ (function(module, exports) {

module.exports = "<div ng-repeat=\"currentContact in $ctrl.contacts\"> <contact-item contact=currentContact delete-item=$ctrl.deleteItem(currentContact)></contact-item> </div> ";

/***/ }),
/* 75 */
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
/* 76 */
/***/ (function(module, exports) {

module.exports = "<div class=media> <div class=\"media-left media-middle\"> <a href=#> <img class=media-object width=90 height=90 src=http://www.corporalmente.com.br/wp-content/uploads/2013/10/profile_avatar_default.png alt=...> </a> </div> <div class=media-body> <h4 class=media-heading> {{$ctrl.contact.name}}</h4> {{$ctrl.contact.address}} <div class=info> <a ui-sref=\"EditContact({id: $ctrl.contact._id})\">✔ EDIT</a> <a ng-click=$ctrl.deleteItem($ctrl.contact);>✖ DELETE</a> </div> </div> </div>";

/***/ }),
/* 77 */
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
/* 78 */
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
/* 79 */
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

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(83)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./app.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./app.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)();
// imports


// module
exports.push([module.i, ".container {\r\n\r\n    margin-top: 5em !important;\r\n}", ""]);

// exports


/***/ }),
/* 82 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 83 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]));