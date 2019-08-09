import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  nickname$ = new BehaviorSubject(null);
  token$ = new BehaviorSubject(null);
  storageNotifier$ = new BehaviorSubject({ updatedOn: null, value: null });
  constructor(
    private storage: Storage,
    ) {
  }

  set(key: string, value: any): void {
    this.storageNotifier$.next({
      updatedOn: key,
      value
    });
    this.storage.set(key, value);
  }

  get(key: string): Observable<any> {
    return from(this.storage.get(key))
      .pipe(
        map(data => {
          if (data) {
            switch (key) {
              case 'contacts':
                return data.sort((a, b) => a.nickname - b.nickname);
              case 'notifications':
                return data.sort((a, b) => a.payload.additionalData.date - b.payload.additionalData.date);
              // case 'chats':
              //   return data.sort((a, b) => )
            }
          }
          return data;
        })
      );
  }

  pushContact(value: any) {
    this.storage.get('contacts')
      .then(contacts => {
        contacts.push(value);
        this.set('contacts', contacts);
      });
  }

  pullContact(value: any) {
    this.storage.get('contacts')
      .then(contacts => {
        const pulled = contacts.filter(contact => contact._id !== value.contactId);
        this.set('contacts', pulled);
      });
  }

  updateContact(value: any) {
    this.storage.get('contacts')
      .then(contacts => {
        const updated = contacts.map(contact => {
          if (contact._id === value.contactId) {
            return {
              _id: value.contactId,
              nickname: value.nickname,
              status: true,
            };
          }
          return contact;
        });
        this.set('contacts', updated);
      });
  }

  pushNotification(incomingNotification: any) {
    this.storage.get('notifications')
      .then(notifications => {
        if (!notifications) {
          return this.set('notifications', [incomingNotification]);
        }
        return this.set('notifications', [...notifications, incomingNotification]);
      });
  }

  resolveNotification(notificationID: string) {
    this.storage.get('notifications')
      .then(notifications => {
        const filtered = notifications.filter(notification => notification.payload.notificationID !== notificationID);
        this.set('notifications', filtered);
      });
  }

  // notificationOpened(notification: any) {
  //   this.get('notifications')
  //     .subscribe(notifications => {
  //       notifications.filter()
  //     })
  // }

  clear(): void {
    this.storage.clear();
  }

  remove(key: string): void {
    this.storage.remove(key);
  }

}
