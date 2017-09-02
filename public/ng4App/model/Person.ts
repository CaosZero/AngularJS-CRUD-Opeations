export class Person {

    public _id: Number;
    public Name: String;
    public Address: String;
    public Phone: String;

    constructor(_id: number, Name: string, Address: string, Phone: String) {
        this._id = _id;
        this.Name = Name;
        this.Address = Address;
        this.Phone = Phone;
    }
}