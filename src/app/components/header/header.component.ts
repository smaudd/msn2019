import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactSearchComponent } from '../modals/contact-search/contact-search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }
  @Input() title: string
  @Input() isHome: boolean
  @Input() addContact: boolean
  ngOnInit() {
  }

  async openContactSearchModal() {
    const modal = await this.modalController.create({
      component: ContactSearchComponent,
      keyboardClose: false,
    })
    return await modal.present();
  }

  dismiss(): void {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

}
