import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { MovieService } from 'src/app/movie.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieSearchComponent } from '../movie-search/movie-search.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/models/movie';
// import { FakeMovieService } from '../movie-detail/movie-detail.component.spec';
// import { FakeMovieService } from '../fake-movie-service.service';

export const mock =
  {
    id: 4,
    name: 'King',
    year: 1995
  } as Movie;

export class FakeMovieService {
  public getMovies(id: number): Observable<Movie> {
    return of(mock);
  }

}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let componentSearch: MovieSearchComponent;
  let fixtureSearch: ComponentFixture<MovieSearchComponent>;
  let movieService: MovieService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, MovieSearchComponent ],
      providers: [MovieService],
      // providers: [{
      //     provide: MovieService,
      //     useClass: FakeMovieService
      //   }],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    fixtureSearch = TestBed.createComponent(MovieSearchComponent);
    componentSearch = fixtureSearch.componentInstance;
    fixtureSearch.detectChanges();
    movieService = TestBed.get(MovieService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getMovies() called', () => {
    spyOn(movieService, 'getMovies').and.callThrough();
    component.ngOnInit();
    expect(component.getMovies).toBeTruthy();
    expect(movieService.getMovies).toHaveBeenCalled();
    expect(component.getMovies).toBeTruthy();
  });

  // it('should get movies have been called ', fakeAsync(() => {
  //   tick();
  //   spyOn(component, 'getMovies').and.callThrough();
  //   spyOn(service, 'getMovies').and.callThrough();
  //   component.ngOnInit();
  //   expect(component.getMovies).toHaveBeenCalled();
  //   expect(service.getMovies).toHaveBeenCalled();
  // }));
});
