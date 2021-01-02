import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SocketioService } from 'src/app/services/socketio.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  gameId: string;
  role = 'operative';
  words;

  constructor(
    private socketIoService: SocketioService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('id');
    this.socketIoService.connect(this.gameId);
    this.recieveJoinedPlayers();
    this.recieveStartGame();
    this.recieveGameUpdate();
  }

  nextGame() {
    this.socketIoService.startGame(this.gameId);
  }

  startGame() {
    this.socketIoService.startGame(this.gameId);
  }

  clickWord(word) {
    word.selected = true;
    this.socketIoService.sendGameUpdate(this.gameId, this.words);
  }

  recieveJoinedPlayers() {
    this.socketIoService.recieveJoinedPlayers().subscribe((message: string) => {
      this.snackbar.open(message, '', {
        duration: 3000,
      });
    });
  }

  recieveStartGame() {
    this.socketIoService.recieveStartGame().subscribe((words) => {
      this.role = 'operative';
      this.words = words;
    });
  }

  recieveGameUpdate() {
    this.socketIoService.recieveGameUpdate(this.gameId).subscribe((words) => {
      this.words = words;
    });
  }
}
