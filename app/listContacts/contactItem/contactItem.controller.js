export default class ContactItemController {
    constructor() {
    }

    deleteContact(_passedId) {
        this.deleteItem({'_id': _passedId.id});
    }
}

