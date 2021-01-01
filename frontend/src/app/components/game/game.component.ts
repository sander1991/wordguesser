import { Component, OnInit } from '@angular/core';
import { SocketioService } from 'src/app/services/socketio.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  role = 'operative';

  constructor(private socketIoService: SocketioService) {}

  ngOnInit(): void {
    this.socketIoService.connect();
  }

  nextGame() {}

  startGame() {}
}
