export class ContactsField {
    status: boolean;
    _id: string;
}

export class ContactsResponse {
    msg: string;
    contacts: ContactsField[]
}