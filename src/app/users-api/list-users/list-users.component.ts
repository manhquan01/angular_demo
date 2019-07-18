import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import {UserApi} from '../../data/user-api';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  titlePage = 'List Users API';
  users: UserApi[] = [];
  data;
  constructor(
      private userService: UserService,
      private httpClient: HttpClient) { }

  ngOnInit() {
    // this.httpClient.get('http://jsonplaceholder.typicode.com/users')
    //     .subscribe((data) => this.data = data);
    this.getUsersFromService();
  }

  getUsersFromService(): void {
    this.userService.getUsersFromApi().subscribe((data) => this.convertData(data));
  }

  convertData(data): void {
    this.users.push(data);
  }
}
