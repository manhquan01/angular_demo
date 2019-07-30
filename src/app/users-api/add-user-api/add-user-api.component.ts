import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user.service';
import {UserApi} from '../../data/user-api';
import {Location} from '@angular/common';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-user-api',
    templateUrl: './add-user-api.component.html',
    styleUrls: ['./add-user-api.component.css']
})
export class AddUserApiComponent implements OnInit {

    titlePage = 'Add User';
    formAddUser;

    constructor(private userService: UserService,
                private location: Location) {
    }

    ngOnInit() {
        this.formAddUser = new FormGroup({
            name: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20)
            ])),
            email: new FormControl(),
            phone_number: new FormControl()
        });
    }

    addUser(newUser: UserApi): void {
        this.userService.addUserApi(newUser).subscribe();
    }


    goBack(): void {
        this.location.back();
    }

}
