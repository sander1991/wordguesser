import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
})
export class LobbyComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  createGame() {
    const uuid = uuidv4();
    this.router.navigate(['/game', uuid]);
  }
}
