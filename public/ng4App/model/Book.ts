import {Person} from "./Person";

export class Book {
    public ID: number;
    public Title: string;
    public Description: string;
    public Image: string;
    public isbn: string;

    constructor(ID: number, Title: string, Description: string, Image: string, isbn: string) {
        this.ID = ID;
        this.Title = Title;
        this.Description = Description;
        this.Image = Image;
        this.isbn = isbn;
    }
}