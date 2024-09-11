import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";

export class Game {
  constructor(
    public id: number,
    public title: string,
    public year: string,
    public rating: number,
    public cost: number
  ) {
  }
}
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit{
  games: Game[] | undefined;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getUsers(){
    // @ts-ignore
    this.httpClient.get<any>('http://localhost:8080/games').subscribe(
      response => {
        console.log(response);
        this.games = response;
      }
    );
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
