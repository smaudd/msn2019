import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/http/contacts.service';
import { Subscription, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap, map, tap } from 'rxjs/operators';
import { Contact } from 'src/app/model/contact.model';
import { FormControl } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { SendInvitationComponent } from '../../popovers/send-invitation/send-invitation.component';


@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.scss'],
})
export class ContactSearchComponent implements OnInit {

  title = 'Search Users';
  loaderLabel = 'Loading';
  subscription: Subscription;
  search = new FormControl('');
  contacts$: Observable<any> = of(null);

  constructor(
    private contactService: ContactsService,
    public popoverController: PopoverController,
    public contactsService: ContactsService,
  ) { }

  ngOnInit() {
    this.findContacts();
  }

  findContacts() {
    this.contacts$ = this.search
      .valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        mergeMap(input => {
          if (input !== '') {
            return this.contactService.find(input);
          }
          return of(null);
        }),
        map(response => {
          const localIds = this.contactService.contacts$.value.map(contact => contact._id);
          if (response) {
            return response.map(user => {
              if (localIds.indexOf(user._id) !== -1) {
                return {
                  ...user,
                  local: true,
                };
              }
              return {
                ...user,
                local: false,
              };
            });
          }
          return response;
        })
      );
  }

  async openPopover(data: Contact) {
    const popover = await this.popoverController.create({
      component: SendInvitationComponent,
      componentProps: data,
      keyboardClose: true,
      cssClass: 'popover'
    });
    return await popover.present();
  }

  openChat(data: Contact) {
    // Do something to open the chat...
  }

}
