import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {HttpClient} from "@angular/common/http";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

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
  editForm!: FormGroup

  constructor(private httpClient: HttpClient,
              private modalService: NgbModal) {
  }

  getUser() {
    this.httpClient.get<any>('http://localhost:8080/users/' + localStorage.getItem('id')).subscribe(
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

  ngOnInit(): void {
    this.getUser();
  }

  update() {
    const editURL = 'http://localhost:8080/users/' + localStorage.getItem('id');
    console.log(this.user);
    this.httpClient.put(editURL, this.user)
      .subscribe((results) => {
        alert('Update successful')
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }
}
