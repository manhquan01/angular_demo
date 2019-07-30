import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { Movie } from 'src/models/movie';

describe('MovieService',  () => {
  let updateData: Movie;
  let addData: Movie;
  let movieService: MovieService;
  let httpMock: HttpTestingController;
  const mockMovies = [
    {id: 1, name: 'Golden boy 2', year: 1995},
    {id: 2, name: 'Men In Black', year: 1999}
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieService
      ],
      imports: [
        HttpClientTestingModule,
      ]
    });
    httpMock = getTestBed().get(HttpTestingController);
    movieService = getTestBed().get(MovieService);
  });

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  it('should get all movie form api', () => {
    movieService.getMovies().subscribe(movies => {
      expect(movies).toEqual(mockMovies);
      expect(movies.length).toEqual(2);
    });
    // trả cho method mong muốn là GET
    const req = httpMock.expectOne(`${movieService.moviesURL}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockMovies);
  });

  it('should get movie by ID', () => {
    movieService.getMovieFromId(mockMovies[0].id).subscribe(movie => {
      expect(movie).toEqual(mockMovies[0]);
    });

    const req = httpMock.expectOne(`${movieService.moviesURL + '/' + mockMovies[0].id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockMovies[0]);
  });

  it('should update movie api', () => {
    updateData = {id: 1, name: 'Golden boy 2', year: 2019}
    movieService.updateMovie(updateData).subscribe(movie => {
      expect(movie).toEqual(updateData);
    })
    const req = httpMock.expectOne(`${movieService.moviesURL + '/' + mockMovies[0].id}`);
    expect(req.request.method).toEqual('PUT');
    req.flush(updateData);
  });

  it('should add user by api', () => {
    addData = {id: 3, name: 'The Earth', year: 2019}
    movieService.addMovie(addData).subscribe(user => {
      expect(user).toEqual(addData);
    });

    const req = httpMock.expectOne(`${movieService.moviesURL}`);
    expect(req.request.method).toEqual('POST');
    req.flush(addData);
  });

  it('should delete movie from api by id', () => {
    movieService.deleteMovie(mockMovies[0].id).subscribe(user => {
      expect(user).toEqual(mockMovies[0]);
    });

    const req = httpMock.expectOne(`${movieService.moviesURL + '/' + mockMovies[0].id}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(mockMovies[0]);
  });
});
