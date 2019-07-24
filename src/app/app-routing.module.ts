import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
    { path: 'employees', component: EmployeesComponent },
    { path: 'employee/detail/:id', component: EmployeeDetailComponent },
    { path: 'employee/edit/:id', component: EditEmployeeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
