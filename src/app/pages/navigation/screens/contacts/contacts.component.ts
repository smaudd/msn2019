import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/services/http/contacts.service';
import { Observable } from 'rxjs';
import config from '../../../../../config';
import { ContactsField } from 'src/app/model/contactsResponse.model';
import { AlertController } from '@ionic/angular';
import { NotificationsService } from 'src/app/services/notifications.service';
import { Contact } from 'src/app/model/contact.model';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {

  title = 'Contacts';
  contacts$: Observable<ContactsField[]> = this.contactsService.contacts$;
  href: any = config;
  notifications: any;

  constructor(
    public storageService: StorageService,
    private router: Router,
    private contactsService: ContactsService,
    private alertCtlr: AlertController,
    public notificationsService: NotificationsService,
    public socketService: SocketService,
  ) { }

  ngOnInit() {
  }

  openChat(contact: Contact) {
    console.log('CLICK')
    this.storageService.get('_id')
      .subscribe((_id: string) => {
        const chatData = {
          participant1: _id,
          participant2: contact._id
        };
        this.socketService.emit('openChat', chatData);
      });
  }

  clear() {
    this.storageService.remove('token');
    this.storageService.remove('notifications');
    this.storageService.get('contacts')
      .subscribe(res => {
        this.showAlert(res);
      });
    this.router.navigate(['/home']);
  }

  showAlert(msg) {
    this.alertCtlr.create({
      header: 'HOLA',
      message: JSON.stringify(msg),
      buttons: ['Ok']
    }).then(alert => alert.present());
  }


}
