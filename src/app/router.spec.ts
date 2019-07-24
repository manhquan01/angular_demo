import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from './app-routing.module';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {ListCategoriesComponent} from './Categories/list-categories/list-categories.component';
import {ListUserComponent} from './user/list-user/list-user.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {ListUsersComponent} from './users-api/list-users/list-users.component';
import {EditUserApiComponent} from './users-api/edit-user-api/edit-user-api.component';
import {AddUserApiComponent} from './users-api/add-user-api/add-user-api.component';
import {LifecycleHookComponent} from './lifecycle-hook/lifecycle-hook.component';
import {DetailCategoryComponent} from './Categories/detail-category/detail-category.component';
import {MessageComponent} from "./Categories/message/message.component";
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('Router: App', () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
       TestBed.configureTestingModule({
           declarations: [
               ListUserComponent,
               ListCategoriesComponent,
               AppComponent,
               EditUserComponent,
               ListUsersComponent,
               EditUserApiComponent,
               AddUserApiComponent,
               LifecycleHookComponent,
               DetailCategoryComponent,
               MessageComponent,
           ],
           imports: [
               RouterTestingModule.withRoutes(routes),
               FormsModule,
           ],
           providers: [
               HttpClient,
               HttpHandler,
           ]
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
        tick(15);
        expect(done).toBeTruthy();
    }));

    it('should redirect to "/users"', fakeAsync(() => {
        router.navigate(['/users']).then(() => {
            tick();
            expect(location.path()).toBe('/users');
        });
    }));

    it('should redirect to "/categories"', fakeAsync(() => {
        router.navigate(['/categories']).then(() => {
            tick();
            expect(location.path()).toBe('/categories');
        });
    }));

    it('should redirect to "/users-api"', fakeAsync(() => {
        router.navigate(['/users-api']).then(() => {
            tick();
            expect(location.path()).toBe('/users-api');
        });
    }));

    it('should redirect to "/user-api-add"', fakeAsync(() => {
        router.navigate(['/user-api-add']).then(() => {
            tick();
            expect(location.path()).toBe('/user-api-add');
        });
    }));

    it('should redirect to "/lifecycle-hook"', fakeAsync(() => {
        router.navigate(['/lifecycle-hook']).then(() => {
            tick();
            expect(location.path()).toBe('/lifecycle-hook');
        });
    }));

    it('should redirect to "/user/:id/edit"', fakeAsync(() => {
        router.navigate(['/user/:id/edit']).then(() => {
            tick();
            expect(location.path()).toBe('/user/:id/edit');
        });
    }));

    it('should redirect to "user-api/:id"', fakeAsync(() => {
        router.navigate(['/user/:id/edit']).then(() => {
            tick();
            expect(location.path()).toBe('/user/:id/edit');
        });
    }));
});
