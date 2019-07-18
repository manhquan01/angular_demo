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

    // private apiUrl = 'http://laravel.local/api/v1/user';
    private apiUrl = 'http://5d3009c328465b00146aaab8.mockapi.io/user';

    getUser(): Observable<User[]> {
        return of(USERS);
    }

    getUserFromId(id: number): Observable<User> {
        return of(USERS.find(user => user.id === id));
    }

    getUsersFromApi(): Observable<UserApi[]> {
        return this.http.get<UserApi[]>(this.apiUrl).pipe(
            tap(
                // receivedUsers => console.log(`receivedUsers = ${JSON.stringify(receivedUsers)}`)
            ),
            catchError(error => of([])),
        );
    }

    getUserApi(id: number): Observable<UserApi> {
        const URL = `${this.apiUrl + '/' + id}`;
        return this.http.get<UserApi>(URL).pipe(
            tap(receivedUser => console.log(`receivedUser = ${JSON.stringify(receivedUser)}`)),
            catchError(error => of(new UserApi()))
        );
    }

    addUserApi(user: UserApi): Observable<UserApi> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.post<UserApi>(`${this.apiUrl}`, user, httpOptions);
    }

    updateUserApi(user: UserApi): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.put(`${this.apiUrl}/${user.id}`, user, httpOptions);
    }

    deleteUserApi(user: number): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.delete(`${this.apiUrl}/${user}`, httpOptions);
    }


}
