import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { NavController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  nickname$ = this.storageService.nickname$
  form: FormGroup
  constructor(
    public socketService: SocketService,
    public nav: NavController,
    private fb: FormBuilder,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      message: new FormControl('', [Validators.required])
    })
  }

  async sendMessage(message: string) {
    const data = {
      msg: message,
      nickname: this.nickname$.value
    }
    this.form.reset()
    this.socketService.emit('input', data)
  }

}
