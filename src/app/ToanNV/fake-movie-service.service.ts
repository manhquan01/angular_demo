import { Observable, of } from 'rxjs';
import { Movie } from 'src/models/movie';
import { mock } from './movie-detail/movie-detail.component.spec';

export class FakeMovieService {
    public getMovieFormServiceById(id: number): Observable<Movie> {
      return of(mock);
    }
    public delete(id: number): Observable<Movie> {
      return of();
    }
    public updateMovie(movie: Movie): Observable<Movie> {
      return of(movie);
    }
    public getMovies(id: number): Observable<Movie> {
      return of(mock);
    }
}
