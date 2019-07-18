import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListUserComponent} from './user/list-user/list-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { UserService } from './user.service';
import { ListCategoriesComponent } from './Categories/list-categories/list-categories.component';
import { DetailCategoryComponent } from './Categories/detail-category/detail-category.component';
import { MessageComponent } from './Categories/message/message.component';
import {MessageService} from './message.service';
import { ListUsersComponent } from './users-api/list-users/list-users.component';
import { HttpClientModule} from '@angular/common/http';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './employee.service';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ListUserComponent,
        EditUserComponent,
        ListCategoriesComponent,
        DetailCategoryComponent,
        MessageComponent,
        ListUsersComponent,
        EmployeesComponent,
        EmployeeDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        UserService,
        MessageService,
        EmployeeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
