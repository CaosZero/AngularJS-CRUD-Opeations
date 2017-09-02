import {Component, Input, OnInit} from "@angular/core";
import {BookService} from "../BookService";

@Component({
    selector: 'book',
    templateUrl: "./ng4App/book/BookDetail/book.component.html"
})
export class BookDetailComponent implements OnInit {
    @Input() Book;


    ngOnInit() {}
}