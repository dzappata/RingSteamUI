import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, NgForm} from "@angular/forms";

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
    NgForOf,
    FormsModule
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit{
  games: Game[] | undefined;
  closeResult: string | undefined;
  private gameId : number | undefined;

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal
  ) {
  }

  getGames(){
    // @ts-ignore
    this.httpClient.get<any>('http://localhost:8080/games').subscribe(
      response => {
        console.log(response);
        this.games = response;
      }
    );
  }

  ngOnInit(): void {
    this.getGames();
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(f: NgForm) {
    const url = 'http://localhost:8080/games/addnew';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }

  openDetails(targetModal: any, game: Game) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    // @ts-ignore
    document.getElementById('title2').setAttribute('value', game.title);
    // @ts-ignore
    document.getElementById('year2').setAttribute('value', game.year);
    // @ts-ignore
    document.getElementById('rating2').setAttribute('value', String(game.rating));
    // @ts-ignore
    document.getElementById('cost2').setAttribute('value', String(game.cost));
  }

  openAdd(targetModal: any, game: Game) {
    this.gameId = game.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onAdd() {
    const addURL = 'http://localhost:8080/users/' + sessionStorage.getItem('id')+'/' + this.gameId + '/addgame';
    this.httpClient.post(addURL,this.gameId)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

}

