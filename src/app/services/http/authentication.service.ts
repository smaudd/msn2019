import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpForm } from '../../model/signup.model';
import config from '../../../config'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TokenResponse } from '../../model/tokenResponse.model';
import { LoginForm } from '../../model/loginForm.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  signUp(signupForm: SignUpForm): Observable<TokenResponse> {
    console.log(signupForm)
    return this.http.post<TokenResponse>(config.baseUrl + '/signup', signupForm)
  }

  logIn(loginForm: LoginForm): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(config.baseUrl + '/login', loginForm)
  }


}
