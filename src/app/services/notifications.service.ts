import { Injectable, NgZone } from '@angular/core';
import { StorageService } from './storage.service';
import { BehaviorSubject, of } from 'rxjs';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Platform } from '@ionic/angular';
import config from '../../config';
import { mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notifications$ = new BehaviorSubject([]);

  constructor(
    private platform: Platform,
    public storageService: StorageService,
    public oneSignal: OneSignal,
    private zone: NgZone
  ) {
    this.platform.ready().then(() => {
    if (this.platform.is('cordova')) {
      this.setupPush();
      this.listenStorageNotifier();
    }
  });
  }

  setupPush() {

    this.storageService.get('notifications')
    .subscribe(notifications => {
      if (!notifications) {
        return this.notifications$.next([]);
      }
      this.notifications$.next(notifications);
    });

    this.oneSignal.startInit(config.oneSignalKey, config.oneSignalAppId);
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
    this.oneSignal.getIds()
      .then(userInfo => {
        this.storageService.set('player_id', userInfo.userId);
      });

    this.handleIncomingNotifications();
    this.handleOpenedNotification();

    this.oneSignal.endInit();
  }

  listenStorageNotifier() {
    this.storageService.storageNotifier$
      .subscribe(storageChange => {
        if (storageChange.updatedOn === 'notifications') {
          this.notifications$.next(storageChange.value);
        }
      });
  }

  notificate(notification: any): void {
    // Contact acceptance => CODE=31
    // Contact denial => CODE=33
    switch (notification.payload.additionalData.code) {
      case 31:
        this.storageService.updateContact(notification.payload.additionalData.contact);
        break;
      case 33:
        this.storageService.pullContact(notification.payload.additionalData.contact);
        break;
    }
    this.storageService.pushNotification(notification);
    this.notifications$.next([...this.notifications$.value, notification]);
  }

  resolveNotification(notification: any) {
    this.storageService.resolveNotification(notification.payload.notificationID);
  }

  handleIncomingNotifications() {
    this.oneSignal.handleNotificationReceived()
      .subscribe(data => {
        this.zone.run(() => {
          this.notificate(data);
      });
    });
  }

  handleOpenedNotification() {
    this.oneSignal.handleNotificationOpened()
      .pipe(
        mergeMap(_ => {
          return this.storageService.get('notifications');
        })
      )
      .subscribe(data => {
        this.zone.run(() => {
          this.notificate(data);
      });
    });
  }

}
