import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";

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

  constructor(
  private httpClient: HttpClient
  ) {
  }

  getUsers(){
    // @ts-ignore
    this.httpClient.get<any>('http://localhost:8080/users').subscribe(
      response => {
        console.log(response);
        this.users = response;
      }
    );
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
