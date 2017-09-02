import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Book} from "../model/Book";


@Injectable()
export class BookService {
    private books: Book[] = [];

    constructor(private http: Http) {
    }

    getListBooks() {
        return this.http.get('http://it-ebooks-api.info/v1/search/angular')
            .map(
                (response: Response) => {
                    this.books = response.json().Books;
                    return this.books;
                })
            .catch((error: Response) => {
                return Observable.throw(error);
            })
    }

    getBookByISBN(ISBN: String) {
        let retrivedBook: Book = null;
        this.books.forEach((currentBook) => {
            if (currentBook.isbn == ISBN) {
                retrivedBook = currentBook;
            }
        });
        return retrivedBook
    }
}