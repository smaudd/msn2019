import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/services/http/contacts.service';
import { Observable } from 'rxjs';
import { ContactsResponse, ContactsField } from 'src/app/model/contactsResponse.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {

  title: string = 'Contacts'
  contacts$: Observable<ContactsField[]> = this.http.read()

  constructor(
    public storageService: StorageService,
    private router: Router,
    private http: ContactsService
  ) { }

  ngOnInit() {
  }

  openChat() {

  }

  clear() {
    this.storageService.clear()
    this.router.navigate(['/home'])
  }

}
