import {Injectable} from '@angular/core';
import {USERS} from './data/mock-users';
import {User} from './data/user';
import {UserApi} from './data/user-api';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient,
    ) {
    }

    private apiUrl = 'http://laravel.local/api/v1/user';

    getUser(): Observable<User[]> {
        return of(USERS);
    }

    getUserFromId(id: number): Observable<User> {
        return of(USERS.find(user => user.id === id));
    }

    getUsersFromApi(): Observable<UserApi[]> {
        return this.http.get<UserApi[]>(this.apiUrl).pipe(
            tap(receivedUsers => console.log(`receivedUsers = ${JSON.stringify(receivedUsers)}`)),
            catchError(error => of([])),
        );
    }
}
