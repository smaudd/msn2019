import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpForm } from '../../model/signup.model';
import config from '../../../config';
import { Observable } from 'rxjs';

import { TokenResponse } from '../../model/tokenResponse.model';
import { LoginForm } from '../../model/loginForm.model';
import { StorageService } from '../storage.service';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    public storageService: StorageService
  ) { }

  signUp(signupForm: SignUpForm): Observable<TokenResponse> {
    console.log(signupForm);
    return this.storageService.get('player_id')
    .pipe(
      mergeMap(playerId => {
        signupForm.player_id = playerId;
        return this.http.post<TokenResponse>(config.baseUrl + '/signUp', signupForm);
      })
    );
  }

  logIn(loginForm: LoginForm): Observable<TokenResponse> {
    return this.storageService.get('player_id')
      .pipe(
        mergeMap(playerId => {
          loginForm.player_id = playerId;
          return this.http.post<TokenResponse>(config.baseUrl + '/login', loginForm);
        })
      );
  }


}
