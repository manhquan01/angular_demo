import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListUserComponent} from './user/list-user/list-user.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {ListCategoriesComponent} from './Categories/list-categories/list-categories.component';
import {ListUsersComponent} from './users-api/list-users/list-users.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import {EditUserApiComponent} from './users-api/edit-user-api/edit-user-api.component';
import {AddUserApiComponent} from './users-api/add-user-api/add-user-api.component';
import { MoviesComponent } from './ToanNV/movies/movies.component';
import { DashboardComponent } from './ToanNV/dashboard/dashboard.component';
import { MovieDetailComponent } from './ToanNV/movie-detail/movie-detail.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { BookComponent } from './ToanNV/book/book.component';
import { BookListComponent } from './ToanNV/book-list/book-list.component';
import { BookEditComponent } from './ToanNV/book-edit/book-edit.component';

const routes: Routes = [
    { path: 'users', component: ListUserComponent },
    { path: 'user/:id/edit', component: EditUserComponent },
    { path: 'categories', component: ListCategoriesComponent},
    { path: 'users-api', component: ListUsersComponent},
    { path: 'employees', component: EmployeesComponent },
    { path: 'employee/detail/:id', component: EmployeeDetailComponent },
    { path: 'user-api/:id', component: EditUserApiComponent},
    { path: 'user-api-add', component: AddUserApiComponent},
    { path: 'movies', component: MoviesComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'detail/:id', component: MovieDetailComponent},
    { path: 'employee/edit/:id', component: EditEmployeeComponent },

    { path: 'book/:title', component: BookComponent },
    { path: 'book/:title/edit', component: BookEditComponent },
    { path: 'book', component: BookListComponent },
    {
        path: '',
        redirectTo: 'books/',
        pathMatch: 'full'
    },
];
// const bookRoutes: Routes = [
//     { path: 'book/:title', component: BookComponent },
//     { path: 'book/:title/edit', component: BookEditComponent },
//     { path: 'book', component: BookListComponent },
//     {
//         path: '',
//         redirectTo: 'books/',
//         pathMatch: 'full'
//     }
//  ];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
