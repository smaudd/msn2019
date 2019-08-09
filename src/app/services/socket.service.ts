import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import config from '../../config/index';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Message } from '../model/message.model';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket = null;
  chatsStream$: Observable<Message[]> = of([]);
  // chatsStreamCache: Message[] = [];
  chat$ = new BehaviorSubject([]);
  constructor(
    public storageService: StorageService,
    private router: Router
  ) {
    this.connect('chats', 'GIMME');
  }

  connect(namespace: string, token: string): void {
      this.socket = io(`${config.baseUrl}/${namespace}`, {
        query: {
          token
        }
      });
      this.socket.on('connect', () => {
        console.log('socket connected');
        this.listen('chatInfo');
        this.listen('message');
      });
  }

  isConnected(): boolean {
    return this.socket !== null ? true : false;
  }

  disconnect(): void {
    this.socket.disconnect();
  }

  emit(event: string, data: {}): void {
    this.socket.emit(event, data);
  }

  listen(event: string): void {

    this.socket.on(event, data => {
      if (event === 'message') {
        // Save message on the chat storage etc etc
        this.chat$.next([...this.chat$.value, data]);
        console.log('received');
      }
      if (event === 'chatInfo') {
        this.storageService.set(data.chat._id, data);
        this.chat$.next(data.messages);
        this.router.navigate(
          ['/chat'],
          { queryParams: {
              id: data.chat._id,
              with: data.chat.users[1].nickname
            }
          });
      }
    });
  }

}
