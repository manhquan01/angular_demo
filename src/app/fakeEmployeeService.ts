import { Employee, mockEmployee } from './models/employee';
import { Observable, of } from 'rxjs';

export class FakeEmployeeService {
    public getEmployeeFromServerById(id: number): Observable<Employee> {
      return of(mockEmployee);
    }

    public delete(id: number): Observable<Employee> {
      return of();
    }

    public updateEmployee(employee: Employee): Observable<Employee> {
      return of(employee);
    }
}
