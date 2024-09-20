import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {isPlatformBrowser, NgForOf} from "@angular/common";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

export class Friend {

  constructor(
    public id: number,
    public username: string,
    public emailaddress: string,
    public phonenumber: string
  ) {
  }
}

@Component({
  selector: 'app-friend',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.css'
})

export class FriendComponent implements OnInit{
  friends: Friend[] | undefined;
  private deleteId: number | undefined;
  private readonly platformId = inject(PLATFORM_ID);

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal
  ) {
  }

  getUsers() {
    if (isPlatformBrowser(this.platformId)) {
      // @ts-ignore
      this.httpClient.get<any>('http://localhost:8080/users/' + sessionStorage.getItem('id') + '/friends').subscribe(
        response => {
          console.log(response);
          this.friends = response;
        }
      );
    }
  }

  ngOnInit(): void {
    this.getUsers();
  }

  openDelete(targetModal: any, friend: Friend) {
    this.deleteId = friend.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    if (isPlatformBrowser(this.platformId)) {
      const deleteURL = 'http://localhost:8080/users/' + sessionStorage.getItem('id') + '/' + this.deleteId + '/delfriend';
      this.httpClient.delete(deleteURL)
        .subscribe((results) => {
          this.ngOnInit();
          this.modalService.dismissAll();
        });
    }
  }
}
