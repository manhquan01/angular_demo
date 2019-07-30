import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { MovieService } from 'src/app/movie.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieInfoComponent } from '../movie-info/movie-info.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  let componentInfoComponent: MovieInfoComponent;
  let fixtureMovieInfo: ComponentFixture<MovieInfoComponent>;

  let movieService: MovieService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent, MovieInfoComponent ],
      providers: [
        MovieService,
        HttpHandler,
      ],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    fixtureMovieInfo = TestBed.createComponent(MovieInfoComponent);
    componentInfoComponent = fixtureMovieInfo.componentInstance;
    fixtureMovieInfo.detectChanges();

    movieService = TestBed.get(MovieService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
