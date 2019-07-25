import { Injectable } from '@angular/core';
import { Movie } from 'src/app/ToanNV/models/movie';
// import { fakeMovies } from './fake-movies';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap , map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders ({ 'Content-Type': 'application/json'}) // quy định content của header gửi lên
};
@Injectable()
export class MovieService {
  // getMovies(): Movie[]{
  //   return fakeMovies;
  // }
  private moviesURL = 'http://5d2fd99228465b00146aa8d3.mockapi.io/toan/v1/movies';
  // private moviesURL = 'http://localhost:3000/movies';

  getMovies(): Observable<Movie[]> {
    // lấy thời điểm hiện tại ngày tháng
    // this.messageService.add(`${ new Date().toLocaleString()}. Get movie list`);
    // return of(fakeMovies);
    return this.http.get<Movie[]>(this.moviesURL).pipe(
      tap(receicedMovies => console.log(receicedMovies)), // thành công
      catchError(error => of([]))
    );
  }
  getMovieFromId(id: number): Observable<Movie> { // đầu vào là id, đầu ra là đối tượng movie được quan sát
    // return of(fakeMovies.find(movie => movie.id === id));
    const url = `${this.moviesURL}/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(selectedMovie => console.log(`selectedMovie`)),
      catchError(errror => of(new Movie()))
    );
  }
  updateMovie(movie: Movie): Observable<any> {
    return this.http.put(`${this.moviesURL}/${movie.id}`, movie, httpOptions).pipe(
      // gửi put request lên sv
      tap(updatedMovie => console.log(`updatedMovie`)),
      catchError(errror => of(new Movie()))
    );
  }
  addMovie(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesURL, newMovie, httpOptions).pipe(
      tap(addMovie => console.log(`addMovie`)),
      catchError(errror => of(new Movie()))
    );
  }
  deleteMovie(movieId: number): Observable<Movie> {
    const url = `${this.moviesURL}/${movieId}`;
    return this.http.delete<Movie>(url, httpOptions).pipe(
      tap(_ => console.log(`${movieId}`)),
      catchError(errror => of(new Movie()))
    );
  }
  searchMovies(typedString: string): Observable<Movie[]> {
   //nếu nhập mảng rỗng thì không hiện gì cả
    if (!typedString.trim()) {
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.moviesURL}?name_like=${typedString}`).pipe(
      tap(foundedMovies => console.log(`foundedMovies`)),
      catchError(errror => of(null))
    );
  }
  constructor(
    private http: HttpClient,
    public messageService: MessageService) { }
}
