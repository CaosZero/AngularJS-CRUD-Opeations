import {Component, Inject, OnInit} from "@angular/core";
import {BookService} from "../BookService";
import {Person} from '../../model/Person';
import {Book} from "../../model/Book";


@Component({
    selector: 'books',
    templateUrl: "./ng4App/book/BookList/booksList.component.html"
})
export class BooksListComponent implements OnInit {
    persons: Person[];
    books: Book[];

    constructor(@Inject('ContactService') public ContactService, private BookService: BookService) {
    }

    ngOnInit() {
        this.persons = this.ContactService.getContacts();
        this.BookService.getListBooks().subscribe((response: Book[]) => {
            this.books = response;
        })
    }

}