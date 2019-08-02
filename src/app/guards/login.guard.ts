import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    public storageService: StorageService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.storageService.get('token')
      .pipe(
        map((token: string) => {
          if (token === null) {
            this.router.navigate(['/home'])
            return false
          }
          return true
        }),
      )
  }

}
