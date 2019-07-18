import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListUserComponent} from './user/list-user/list-user.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {ListCategoriesComponent} from './Categories/list-categories/list-categories.component';
import {ListUsersComponent} from './users-api/list-users/list-users.component';
import { MoviesComponent } from './ToanNV/movies/movies.component';
import { DashboardComponent } from './ToanNV/dashboard/dashboard.component';
import { MovieDetailComponent } from './ToanNV/movie-detail/movie-detail.component';


const routes: Routes = [
    { path: 'users', component: ListUserComponent },
    { path: 'user/:id/edit', component: EditUserComponent },
    { path: 'categories', component: ListCategoriesComponent},
    { path: 'users-api', component: ListUsersComponent},
    { path: 'movies', component: MoviesComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'detail/:id', component: MovieDetailComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
