import { Component, OnInit, Input } from '@angular/core';
import { ContactsService } from 'src/app/services/http/contacts.service';
import { Subscription } from 'rxjs';
import { PopoverController, ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-send-invitation',
  templateUrl: './send-invitation.component.html',
  styleUrls: ['./send-invitation.component.scss'],
})
export class SendInvitationComponent {

  @Input() nickname: string;
  @Input() _id: string;
  sub: Subscription;
  constructor(
    private contactService: ContactsService,
    public modalController: ModalController,
    public popoverController: PopoverController,
    public storageService: StorageService
  ) { }

  add() {
    this.sub = this.contactService.add(this.nickname)
      .subscribe(_ => {
        this.popoverController.dismiss();
        this.modalController.dismiss();
    });
  }

  cancel() {
    this.modalController.dismiss();
  }
}
