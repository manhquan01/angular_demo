import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user.service';
import {UserApi} from '../../data/user-api';
import {Location} from '@angular/common';

@Component({
    selector: 'app-add-user-api',
    templateUrl: './add-user-api.component.html',
    styleUrls: ['./add-user-api.component.css']
})
export class AddUserApiComponent implements OnInit {

    titlePage = 'Add User';

    constructor(private userService: UserService,
                private location: Location) {
    }

    ngOnInit() {
    }

    addUser(
        name: string,
        email: string,
        phone: string
    ): void {
        const newUser: UserApi = new UserApi();
        newUser.name = name;
        newUser.email = email;
        newUser.phoneNumber = phone;
        this.userService.addUserApi(newUser).subscribe();
    }


    goBack(): void {
        this.location.back();
    }

}
