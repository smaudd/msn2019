import { Component, OnInit, Input } from '@angular/core';
import { ContactsService } from 'src/app/services/http/contacts.service';
import { Subscription, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap, map, tap } from 'rxjs/operators';
import { Contact } from 'src/app/model/contact.model';
import { FormControl } from '@angular/forms';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.scss'],
})
export class ContactSearchComponent implements OnInit {

  title: string = 'Add Contacts'
  loaderLabel: string = 'Please wait...'
  subscription: Subscription
  search = new FormControl('')
  isLoading: Observable<boolean> = of(false)
  contacts$: Observable<Contact[]> = of(null)
  constructor(
    private contactService: ContactsService,
    public loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.findContacts()
  }

  findContacts() {
    this.contacts$ = this.search
      .valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        mergeMap(input => {
          if (input !== '') {
            return this.contactService.find(input)
          }
          return of(null)
        })
      )
  }
}
