import {Ng2StateDeclaration} from "@uirouter/angular";

import {BooksListComponent} from "./BookList/booksList.component";
import {BookDetailComponent} from "./BookDetail/bookDetail.component";
import {Book} from "../model/Book";
import {BookService} from "./BookService";
import {Transition} from "@uirouter/angular";


export const BookListState: Ng2StateDeclaration = {
    name: "Books",
    url: "/books",
    component: BooksListComponent
};

export const BookDetailState: Ng2StateDeclaration = {
    name: "BookDetail",
    url: "/books/:ISBN",
    resolve: [
        {
            token: 'Book',
            deps: [Transition, BookService],
            resolveFn: (trans, BookService) => {
                console.log(BookService.getBookByISBN(trans.params().ISBN))
                return BookService.getBookByISBN(trans.params().ISBN)
            }
        }
    ],
    component: BookDetailComponent
}

