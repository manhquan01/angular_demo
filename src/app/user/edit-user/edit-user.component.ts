import {Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { UserService} from '../../user.service';
import { User} from '../../data/user';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
    titlePage = 'Detail User'
    user: User;
    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.getUserFormRoute();
    }

    getUserFormRoute(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        // console.log(`${JSON.stringify(this.route.snapshot.paramMap.get('id'))}`);
        this.userService.getUserFromId(id).subscribe(user => this.user = user);
    }



    goBack(): void {
        this.location.back();
    }
}
