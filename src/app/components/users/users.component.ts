import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {isPlatformBrowser, NgForOf} from "@angular/common";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Game} from "../game/game.component";

export class User {
  constructor(
    public id: number,
    public username: string,
    public emailaddress: string,
    public phonenumber: string
  ) {
  }
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: User[] | undefined;
  private userId : number | undefined;

  private readonly platformId = inject(PLATFORM_ID);

  constructor(
  private httpClient: HttpClient,
  private modalService: NgbModal
  ) {
  }

  getUsers() {
    // @ts-ignore
    this.httpClient.get<any>('http://localhost:8080/users').subscribe(
      response => {
        console.log(response);
        this.users = response;
      });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  openAdd(targetModal: any, user: User) {
    this.userId = user.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onAdd() {
    if (isPlatformBrowser(this.platformId)) {
      const addURL = 'http://localhost:8080/users/' + sessionStorage.getItem('id') + '/' + this.userId + '/addfriend';
      this.httpClient.post(addURL, this.userId)
        .subscribe((results) => {
          this.ngOnInit();
          this.modalService.dismissAll();
        });
    }
  }

}
