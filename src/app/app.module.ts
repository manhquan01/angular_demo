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
import { EditUserApiComponent } from './users-api/edit-user-api/edit-user-api.component';
import { AddUserApiComponent } from './users-api/add-user-api/add-user-api.component';
import { MoviesComponent } from './ToanNV/movies/movies.component';
import { MovieService } from './movie.service';
import { DashboardComponent } from './ToanNV/dashboard/dashboard.component';
import { MovieDetailComponent } from './ToanNV/movie-detail/movie-detail.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { RouterModule } from '@angular/router';
import { MovieSearchComponent } from './ToanNV/movie-search/movie-search.component';
import { MovieInfoComponent } from './ToanNV/movie-info/movie-info.component';
import { BookComponent } from './ToanNV/book/book.component';
import { BookListComponent } from './ToanNV/book-list/book-list.component';
import { BookEditComponent } from './ToanNV/book-edit/book-edit.component';
import { TreeComponent } from './ToanNV/tree/tree.component';

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
        EmployeeDetailComponent,
        EditUserApiComponent,
        AddUserApiComponent,
        MoviesComponent,
        MovieDetailComponent,
        DashboardComponent,
        EditEmployeeComponent,
        MovieSearchComponent,
        MovieInfoComponent,
        BookComponent,
        BookListComponent,
        BookEditComponent,
        TreeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule
    ],
    providers: [
        UserService,
        MessageService,
        EmployeeService,
        MovieService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
