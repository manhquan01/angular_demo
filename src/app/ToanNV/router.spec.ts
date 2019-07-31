import { routes } from '../app-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { fakeAsync } from '@angular/core/testing';

describe('routes', () => {
    it ('should contain a route for /movies', () => {
        expect(routes).toContain({ path: 'movies', component: MoviesComponent});
    });
   
});
