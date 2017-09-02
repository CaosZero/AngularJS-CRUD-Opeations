import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UIRouterModule} from "@uirouter/angular";

import {BookListState, BookDetailState} from "./books.states";
import {BooksListComponent} from "./BookList/booksList.component";
import {BookDetailComponent} from "./BookDetail/bookDetail.component";
import {BookService} from "./BookService";
import {BookListItemComponent} from "./BookList/BookItem/bookItem.component";
import {HttpModule} from "@angular/http";

export let BOOKS_STATES = [BookListState, BookDetailState];

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        UIRouterModule.forChild({states: BOOKS_STATES})
    ],
    declarations: [BooksListComponent, BookListItemComponent, BookDetailComponent],
    providers: [BookService]
})
class BooksModule {
}

export {BooksModule};