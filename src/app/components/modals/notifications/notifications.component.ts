import { Component, OnInit } from '@angular/core';
import config from '../../../../config';
import { NotificationsService } from 'src/app/services/notifications.service';
import { ContactsService } from 'src/app/services/http/contacts.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  title = 'Notifications';
  href: string = config;

  constructor(
    public notificationsService: NotificationsService,
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
  }

  accept(notification: any) {
    this.contactsService.accept(notification.payload.additionalData.contactId)
      .subscribe(_ => {
        this.resolve(notification);
      });
  }

  deny(notification: any) {
    this.contactsService.deny(notification.payload.additionalData.contactId)
      .subscribe(_ => {
        this.resolve(notification);
      });
  }

  resolve(notification: any) {
    this.notificationsService.resolveNotification(notification);
  }

}
