import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/model/loginForm.model';
import { AuthenticationService } from 'src/app/services/http/authentication.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm = {
    fields: {
      email: { 
        type: 'email', 
        label: 'Email' 
      },
      password: { 
        type: 'password', 
        label: 'Password' 
      },
    },
    buttons: {
      login: { 
        label: 'Log In',
        action: (form: any) => this.doLogin(form) 
      }
    }
  }

  title: string = 'Log In'
  constructor(
    private http: AuthenticationService,
    public storageService: StorageService,
    public router: Router,
    public modalController: ModalController,
    public alertService: AlertService
  ) { }

  ngOnInit() {
  }

  doLogin(loginForm: LoginForm) {
    this.http.logIn(loginForm)
      .subscribe(response => {
        this.storageService.set('token', response.token)
        this.router.navigate(['/dashboard/chats'])
        this.dismiss()
      },
      error => {
        if (error.status === 422) {
          const alertInfo = {
            header: 'Invalid Credentials',
            subheader: 'Try Again',
            message: 'The credentials that you provided are not correct',
            buttons: ['OK']
          }
          this.alertService.presentAlert(alertInfo)
        }
      }
    )
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }



}
