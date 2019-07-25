import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { routes } from './app-routing.module';

describe('AppRoutingModule', () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule.withRoutes(routes), ReactiveFormsModule, FormsModule, HttpClientTestingModule ],
            declarations: [EmployeesComponent, EmployeeDetailComponent, EditEmployeeComponent, AppComponent]
        });

        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    });

    it('fakeAsync works', fakeAsync(() => {
        const promise = new Promise(resolve => {
            setTimeout(resolve, 10);
        });
        let done = false;
        promise.then(() => (done = true));
        tick(50);
        expect(done).toBeTruthy();

    }));

    it('navigate to "employees" takes you to /employees', fakeAsync(() => {
        router.navigate(['/employees']).then(() => {
            tick();
            expect(location.path()).toBe('/employees');
        });
    }));

    it('navigate to "employee/detail/:id" takes you to /employee/detail/:id ', fakeAsync(() => {
        router.navigate(['employee/detail/:id']).then(() => {
            tick();
            expect(location.path()).toBe('/employee/detail/:id');
        });
    }));

    it('navigate to "employee/edit/:id" takes you to /employee/edit/:id', fakeAsync(() => {
        router.navigate(['employee/edit/:id']).then(() => {
            tick();
            expect(location.path()).toBe('/employee/edit/:id');
        });
    }));
});
