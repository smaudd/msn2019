import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { StorageService } from 'src/app/services/storage.service';
import { ModalController } from '@ionic/angular';
import { SignComponent } from 'src/app/components/modals/sign/sign.component';
import { LoginComponent } from 'src/app/components/modals/login/login.component';
import { FormControl, Validators } from '@angular/forms';

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
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  joinChat() {
    this.socketService.connect()
    this.socketService.emit('newUser', { nickname: this.nickname })
    this.storageService.set('nickname', this.nickname)
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
