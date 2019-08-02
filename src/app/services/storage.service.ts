import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  nickname$ = new BehaviorSubject(null)
  token$ = new BehaviorSubject(null)
  constructor(private storage: Storage) {
  }

  set(key: string, value: any): void {
    this.storage.set(key, value)
  }

  get(key: string): Observable<{}> {
    return from(this.storage.get(key))
  }

  clear(): void {
    this.storage.clear()
  }
}
