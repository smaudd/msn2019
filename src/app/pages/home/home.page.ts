import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { StorageService } from 'src/app/services/storage.service';
import { ModalController, Platform, AlertController } from '@ionic/angular';
import { SignComponent } from 'src/app/components/modals/sign/sign.component';
import { LoginComponent } from 'src/app/components/modals/login/login.component';
import { FormControl, Validators } from '@angular/forms';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  nickname: string
  title: string = 'Welcome'
  logo: string = '/assets/img/logo.png'
 
  constructor(
    private socketService: SocketService,
    private storageService: StorageService,
    public modalController: ModalController,
    private localNotifications: LocalNotifications,
    private platform: Platform,
    public alertCtlr: AlertController
  ) { 
    this.platform.ready().then(() => {
      this.localNotifications.on('trigger').subscribe(res => {
        this.showAlert();
      });
      this.localNotifications.on('click').subscribe(res => {
        this.showAlert();
      });
    })
  }

  showAlert() {
    this.alertCtlr.create({
      header: 'HOLA',
      message: 'HAS RECIBIDO?',
      buttons: ['Ok']
    }).then(alert => alert.present());
  }

  ngOnInit() {
  }



  async openSignUpModal() {
    const modal = await this.modalController.create({
      component: SignComponent
    })
    return await modal.present();
  }

  async openLogInModal() {
    const modal = await this.modalController.create({
      component: LoginComponent
    })
    return await modal.present();
  }


  clearStorage() {
    this.storageService.clear()
  }

}
