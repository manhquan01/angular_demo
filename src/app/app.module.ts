import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HttpClientModule, HttpHandler} from '@angular/common/http';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './employee.service';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        AppComponent,
        EmployeesComponent,
        EmployeeDetailComponent,
        EditEmployeeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
    ],
    providers: [
        EmployeeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
