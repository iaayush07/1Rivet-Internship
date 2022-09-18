
export class user {
    public firstName: string;
    public lastName: string;
    public contact: string;
    public email: string;

    constructor(
        firstName: string = '',
        lastName: string = '',
        contact: string = '',
        email: string = '',
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.contact = contact;
        this.email = email;
    }
}