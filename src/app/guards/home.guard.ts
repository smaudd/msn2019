import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(
    public storageService: StorageService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.storageService.get('token')
      .pipe(
        map((token: string) => {
          if (token !== null) {
            this.router.navigate(['/navigation'])
            return false
          }
          return true
        }),
      )
  }

}
