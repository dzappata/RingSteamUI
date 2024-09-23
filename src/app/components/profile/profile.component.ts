import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: any = {id: '', username: '', emailaddress: '', phonenumber: '', password:''};
  private readonly platformId = inject(PLATFORM_ID);

  constructor(private httpClient: HttpClient,
              private modalService: NgbModal) {
  }

  getUser() {
    if (isPlatformBrowser(this.platformId)) {
      this.httpClient.get<any>('http://localhost:8080/users/' + sessionStorage.getItem('id')).subscribe(
        response => {
          console.log(response);
          this.user.id = response.id;
          this.user.username = response.username;
          this.user.emailaddress = response.emailaddress;
          this.user.phonenumber = response.phonenumber;
          this.user.password = response.password;
        }
      );
    }
  }

  ngOnInit(): void {
    this.getUser();
  }

  update() {
    if (isPlatformBrowser(this.platformId)) {
      const editURL = 'http://localhost:8080/users/' + sessionStorage.getItem('id');
      console.log(this.user);
      this.httpClient.put(editURL, this.user)
        .subscribe((results) => {
          alert('Update successful')
          this.ngOnInit();
          this.modalService.dismissAll();
        });
    }
  }
}
