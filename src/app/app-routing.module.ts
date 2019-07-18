import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListUserComponent} from './user/list-user/list-user.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {ListCategoriesComponent} from './Categories/list-categories/list-categories.component';
import {ListUsersComponent} from './users-api/list-users/list-users.component';


const routes: Routes = [
    { path: 'users', component: ListUserComponent },
    { path: 'user/:id/edit', component: EditUserComponent },
    { path: 'categories', component: ListCategoriesComponent},
    { path: 'users-api', component: ListUsersComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
