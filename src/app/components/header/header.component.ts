import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactSearchComponent } from '../modals/contact-search/contact-search.component';
import { NotificationsComponent } from '../modals/notifications/notifications.component';
import { NotificationsService } from 'src/app/services/notifications.service';
import { BehaviorSubject, of, timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    public modalController: ModalController,
    public notificationsService: NotificationsService
  ) { }
  @Input() title: string;
  @Input() isHome: boolean;
  @Input() addContact: boolean;
  @Input() notificationsIcon: boolean;
  notifications = new BehaviorSubject([]);

  ngOnInit() {
    this.notificationsService.notifications$.subscribe(value => {
      this.notifications.next(value);
    });
  }

  async openContactSearchModal() {
    const modal = await this.modalController.create({
      component: ContactSearchComponent,
      keyboardClose: false,
    });
    return await modal.present();
  }

  async openNotificationsModal() {
    const modal = await this.modalController.create({
      component: NotificationsComponent,
      keyboardClose: false,
    });
    return await modal.present();
  }

  dismiss(): void {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
