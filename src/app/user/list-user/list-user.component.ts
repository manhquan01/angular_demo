import { Component, OnInit } from '@angular/core';
import { User} from '../../data/user';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  titlePage = 'List Users';
  users: User[];
  constructor( private userService: UserService) { }

  ngOnInit() {
    this.getUsersFromService();
  }

  getUsersFromService(): void {
    this.userService.getUser().subscribe(users => this.users = users);
  }
}
