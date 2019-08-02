import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import config from '../../config/index'
import { Observable, of } from 'rxjs'
import { Message } from '../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket = null
  stream$: Observable<Message[]>
  streamCache: Message[] = []

  constructor() {
  }

  connect(): void {
      this.socket = io(config.baseUrl) 
      this.socket.on('connect', _ => {
        console.log('Connected')
        this.listen('output')
      }) 
  }

  isConnected(): boolean {
    return this.socket !== null ? true : false
  }

  disconnect(): void {
      this.socket.disconnect()
  }

  emit(event: string, data: {}): void {
    this.socket.emit(event, data)
  }

  listen(event: string): void {
    this.socket.on(event, data => {
      if (event === 'output') {
        console.log(data)
        this.streamCache.push(data)
        this.stream$ = of(this.streamCache)
      }
    })
  }

}
