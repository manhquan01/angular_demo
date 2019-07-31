import { Router } from '@angular/router';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MoviesComponent } from './ToanNV/movies/movies.component';
import { MovieDetailComponent } from './ToanNV/movie-detail/movie-detail.component';
import { DashboardComponent } from './ToanNV/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { MovieInfoComponent } from './ToanNV/movie-info/movie-info.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { routes } from './app-routing.module';
import {Location} from '@angular/common';
import { MovieSearchComponent } from './ToanNV/movie-search/movie-search.component';
import { MovieService } from './movie.service';


describe('Router: App', () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
       TestBed.configureTestingModule({
           declarations: [
               MoviesComponent,
               MovieInfoComponent,
               MovieDetailComponent,
               DashboardComponent,
               AppComponent,
               MovieSearchComponent,
           ],
           imports: [
               RouterTestingModule.withRoutes(routes),
               FormsModule,
           ],
           providers: [
               HttpClient,
               HttpHandler,
               MovieService,
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

    it('should redirect to "/movies"', fakeAsync(() => {
        router.navigate(['/movies']).then(() => {
            tick();
            expect(location.path()).toBe('/movies');
        });
    }));
    
    it('should redirect to "/dashboard"', fakeAsync(() => {
        router.navigate(['/dashboard']).then(() => {
            tick();
            expect(location.path()).toBe('/dashboard');
        });
    }));

    it('should redirect to "/detail/:id"', fakeAsync(() => {
        router.navigate(['/detail/:id']).then(() => {
            tick();
            expect(location.path()).toBe('/detail/:id');
        });
    }));

    it ('should contain a route for /movies', () => {
        expect(routes).toContain({ path: 'movies', component: MoviesComponent});
    });
});
