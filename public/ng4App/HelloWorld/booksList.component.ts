import {Component, Inject, OnInit} from "@angular/core";
import {Person} from '../books/model/Person';

@Component({
    selector: 'hello-world',
    template: "<h1>Hello World</h1>"
})
export class BooksComponent implements OnInit {
    persons: Person[];

    constructor(@Inject('ContactService') public ContactService) {
    }

    ngOnInit() {
        this.persons = this.ContactService.getContacts();
    }

}