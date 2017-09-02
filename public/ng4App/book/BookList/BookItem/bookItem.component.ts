import {Component, Input} from "@angular/core";
import {Book} from "../../../model/Book";

@Component({
    selector: "book-item",
    templateUrl: "./ng4App/book/BookList/BookItem/bookItem.component.html"
})

export class BookListItemComponent {
    @Input() Book: Book;
}