import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketioService {
  socket: Socket;

  constructor() {}

  connect() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }
}
