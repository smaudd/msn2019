import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { NavController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, forkJoin, Observable } from 'rxjs';
import { combineLatest } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  nickname: string;
  _id: string;
  chatId: string;
  messages$ = this.socketService.chatsStream$;
  chat$: Observable<any>;
  with: string;
  sub: Subscription;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    public socketService: SocketService,
    public nav: NavController,
    private fb: FormBuilder,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      message: new FormControl('', [Validators.required])
    });
    this.route.queryParams
      .subscribe(params => {
        this.with = params.with;
        this.chatId = params.id;
      });
    this.storageService.get('user')
      .subscribe(user => {
        this.nickname = user.nickname;
        this._id = user._id;
      });
    this.socketService.chat$.subscribe(console.log)
  }

  async sendMessage(message: string) {
    const data = {
      body: message,
      from: {
        nickname: this.nickname,
        _id: this._id
      },
      chatId: this.chatId
    };
    this.form.reset();
    this.socketService.emit('message', data);
  }

}
