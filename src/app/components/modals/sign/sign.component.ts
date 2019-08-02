import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SignUpForm } from '../../../model/signup.model';
import { StorageService } from '../../../services/storage.service';
import { AuthenticationService } from 'src/app/services/http/authentication.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {

  title: string = 'Sign Up'
  signUpForm = {
    fields: {
      nickname: { type: 'text', label: 'Nickname' },
      email: { type: 'email', label: 'Email' },
      password: { type: 'password', label: 'Password' },
      rpassword: { type: 'password', label: 'Repeat Password' }
    },
    buttons: {
      signup: { 
        label: 'Sign Up',
        action: (form: any) => this.doSignUp(form)
      }
    }
  }

  constructor(
    private http: AuthenticationService,
    public storageService: StorageService,
    private router: Router,
    public modalController: ModalController,
    public alertService: AlertService
  ) { }

  ngOnInit() {
  }

  doSignUp(form: SignUpForm) {
    this.http.signUp(form)
      .subscribe(response => {
        this.storageService.set('token', response.token)
        this.router.navigate(['/dashboard/chats'])
        this.dismiss()
      },
      error => {
        if (error.status === 409) {
            const alertInfo = {
              header: 'Try Again',
              subheader: 'Credentials already in use',
              message: error.error.msg,
              buttons: ['OK']
            }
            this.alertService.presentAlert(alertInfo)
          }
      })
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

}
