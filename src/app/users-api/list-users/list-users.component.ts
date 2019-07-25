import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user.service';
import {UserApi} from '../../data/user-api';

@Component({
    selector: 'app-list-users',
    templateUrl: './list-users.component.html',
    styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
    titlePage = 'List Users API';
    users: UserApi[] = [];

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        // this.httpClient.get('http://jsonplaceholder.typicode.com/users')
        //     .subscribe((data) => this.data = data);
        this.getUsersFromService();
    }

    getUsersFromService(): void {
        this.userService.getUsersFromApi().subscribe((data) => this.users = data);
    }

    delete(userId: number): void {
        // console.log(user);
        this.userService.deleteUserApi(userId).subscribe(_ => {
            this.users = this.users.filter(eachUser => eachUser.id !== userId)
        });
    }
}
