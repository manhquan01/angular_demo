import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../user.service';
import {Location} from '@angular/common';
import {UserApi} from '../../data/user-api';
import { FormGroup, FormControl, Validator, Validators} from '@angular/forms'

@Component({
    selector: 'app-edit-user-api',
    templateUrl: './edit-user-api.component.html',
    styleUrls: ['./edit-user-api.component.css']
})
export class EditUserApiComponent implements OnInit {

    titlePage = 'Edit User';
    user: UserApi;
    formEditUser;
    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private location: Location
    ) { }

    ngOnInit() {
        this.getIdUser();
        this.formEditUser = new FormGroup({
            name: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20)
            ])),
            email: new FormControl(),
            phone_number: new FormControl(),
        });
    }

    getIdUser(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.userService.getUserApi(id).subscribe(user => this.user = user);
    }

    save(): void {
        this.userService.updateUserApi(this.user).subscribe(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }

}
