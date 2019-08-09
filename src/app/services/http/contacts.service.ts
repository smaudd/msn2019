import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../../../config';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Contact } from 'src/app/model/contact.model';
import { StorageService } from '../storage.service';
import { mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts$ = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
    public storageService: StorageService
  ) {
    this.storageService.storageNotifier$
      .pipe(
        mergeMap(notification => {
          if (notification.updatedOn === 'contacts') {
            this.setContacts(notification.value);
            return of(null);
          }
          return this.storageService.get('contacts');
        })
      )
      .subscribe(contacts => {
        if (contacts) {
          this.setContacts(contacts);
        }
      });
  }

  setContacts(value: Contact[]): void {
    this.contacts$.next(value);
  }

  find(nickname: string): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${config.baseUrl}/contacts/find?nickname=${nickname}`);
  }

  add(nickname: string): Observable<Contact[]> {
    return this.http.post<any>(`${config.baseUrl}/contacts/add`, { nickname })
      .pipe(
        tap(response => {
          this.storageService.pushContact(response.contact);
        })
      );
  }

  accept(contactId: string): Observable<any> {
    return this.http.post<any>(`${config.baseUrl}/contacts/accept`, { contactId })
      .pipe(
        tap(response => {
          this.storageService.pushContact(response);
        })
      );
  }

  deny(contactId: string): Observable<any> {
    return this.http.post<any>(`${config.baseUrl}/contacts/deny`, { contactId });
  }


}
