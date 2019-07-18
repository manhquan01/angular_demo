import { Injectable } from '@angular/core';
import { Employee } from './models/employee';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private urlEmployee = 'http://5d2fdac328465b00146aa8f5.mockapi.io/sund/v1/employees';

  // GET: get all employee from server
  getAllEmployeeFromServer(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.urlEmployee).pipe(
      tap( responseEmployee => console.log(`responseEmployeeFromServer = ${JSON.stringify(responseEmployee)}`)),
      catchError(error => of(null))
    );
  }

  // GET: get a employee from server by id
  getEmployeeFromServerById(id: number): Observable<Employee> {
    const url = `${this.urlEmployee}/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap(OneEmployee => console.log(`OneEmployee = ${JSON.stringify(OneEmployee)}`)),
      catchError(error => of(null))
    );
  }

  // POST: add new Employee to server
  addNewEmployeeToServer(newEmployee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.urlEmployee, newEmployee, httpOptions).pipe(
      tap((employee: Employee) => console.log(`Inserted Employee = ${JSON.stringify(employee)}`)),
      catchError(error => of(new Employee()))
    );
  }

  // delete Employee
  delete(id: number): Observable<Employee> {
    const url = `${this.urlEmployee}/${id}`;
    return this.http.delete<Employee>(url).pipe(
      tap(_ => console.log(`Delete Employee with id = ${JSON.stringify(id)}`)),
      catchError(error => of(null))
    );
  }

  constructor(private http: HttpClient) { }
}
