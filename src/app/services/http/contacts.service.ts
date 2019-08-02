import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../../../config'
import { Observable, pipe, of } from 'rxjs';

import { ContactsResponse, ContactsField } from 'src/app/model/contactsResponse.model';
import { tap, map } from 'rxjs/operators';
import { Contact } from 'src/app/model/contact.model';
import { LoadingService } from '../loading.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private http: HttpClient,
    public loadingService: LoadingService
  ) { }

  read(): Observable<ContactsField[]> {
    return this.http.get<ContactsResponse>(config.baseUrl + '/contacts/read')
      .pipe(
        map((res: ContactsResponse) => {
          if (res) {
            return res.contacts
          }
          return []
        })
      )
  }

  find(nickname: string): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${config.baseUrl}/contacts/find?nickname=${nickname}`)
  }

}