import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../user.service';
import {Location} from '@angular/common';
import {UserApi} from '../../data/user-api';

@Component({
    selector: 'app-edit-user-api',
    templateUrl: './edit-user-api.component.html',
    styleUrls: ['./edit-user-api.component.css']
})
export class EditUserApiComponent implements OnInit {

    titlePage = 'Edit User';
    @Input() user: UserApi;
    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private location: Location
    ) { }

    ngOnInit() {
        this.getIdUser();
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
