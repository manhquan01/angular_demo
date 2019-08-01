import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { MovieService } from 'src/app/movie.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { of, Observable } from 'rxjs';
import { Movie } from 'src/models/movie';
import { By } from '@angular/platform-browser';
import { FakeMovieService } from '../fake-movie-service.service';
import { UserApi } from 'src/app/data/user-api';
import { DebugElement } from '@angular/core';


export const mock: Movie[] =[
  { id: 1, name: 'King', year: 1995},
  { id: 2, name: 'Queen', year: 2005}
];

// describe('MoviesComponent', () => {
//   let component: MoviesComponent;
//   let fixture: ComponentFixture<MoviesComponent>;
//   let nativeElement: HTMLElement;


//   let componentInfoComponent: MovieInfoComponent;
//   let fixtureMovieInfo: ComponentFixture<MovieInfoComponent>;

//   let movieService: MovieService;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ MoviesComponent, MovieInfoComponent ],
//       // providers: [
//       //   {
//       //     provide: MovieService,
//       //     useClass: FakeMovieService
//       //   }
//       // ],
//       providers: [MovieService],

//       imports: [RouterTestingModule, HttpClientTestingModule],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MoviesComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();

//     fixtureMovieInfo = TestBed.createComponent(MovieInfoComponent);
//     componentInfoComponent = fixtureMovieInfo.componentInstance;
//     fixtureMovieInfo.detectChanges();
//     nativeElement = fixture.nativeElement;

//     movieService = TestBed.get(MovieService);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('should call to a function add when clicked', () => {
//     let spy = spyOn(component, 'add');
//     let button = nativeElement.querySelector('button.btnAdd');
//     button.dispatchEvent(new Event('click'));
//     expect(spy).toHaveBeenCalled();
//   });

//   it('should getMovieFromService() called', () => {
//     spyOn(movieService, 'getMovies').and.callThrough();
//     component.ngOnInit();
//     expect(component.getMoviesFromServices).toBeTruthy();
//     expect(movieService.getMovies).toHaveBeenCalled();
//     expect(component.getMoviesFromServices).toBeTruthy();
//   });
// });

export const fakeMovie: Movie[] =[
  { id: 1, name: 'King', year: 1995},
  { id: 2, name: 'Queen', year: 2005}
];

class DataStub {
  getMovies(): Observable<Movie[]> {
    return of(fakeMovie);
  }

  deleteMovie(movieId: number): Observable<any> {
    return of(movieId);
  }
}


describe('ListMovieComponent#2', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let movieService: MovieService;
  let nativeElement: HTMLElement;

  let componentInfoComponent: MovieInfoComponent;
  let fixtureMovieInfo: ComponentFixture<MovieInfoComponent>;

  beforeEach(async( () => {
    TestBed.configureTestingModule({
      declarations: [MoviesComponent, MovieInfoComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: MovieService, useClass: DataStub }
      ]
    });
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    movieService = TestBed.get(MovieService);
    nativeElement = fixture.nativeElement;

    fixtureMovieInfo = TestBed.createComponent(MovieInfoComponent);
    componentInfoComponent = fixtureMovieInfo.componentInstance;
    fixtureMovieInfo.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call to a function add() when clicked', () => {
    const spy = spyOn(component, 'add');
    const button = nativeElement.querySelector('button.btnAdd');
    button.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalled();
  });
  it('should getMovieFromService() in component called', () => {
    spyOn(component, 'getMoviesFromServices').and.callThrough();
    spyOn(movieService, 'getMovies').and.callThrough();
    component.ngOnInit();
    expect(component.getMoviesFromServices).toBeTruthy();
    expect(movieService.getMovies).toHaveBeenCalled();
    expect(component.getMoviesFromServices).toBeTruthy();
  });
  it('should show list users & delete button called !', fakeAsync(() => {
    const buttonDelete: DebugElement = fixture.debugElement;
    spyOn(movieService, 'getMovies').and.returnValue(of(fakeMovie));
    component.ngOnInit();
    expect(component.movies).toEqual(fakeMovie);
    expect(buttonDelete.query(By.css('table tbody')).nativeElement).not.toBeNull();
    expect(buttonDelete.query(By.css('.btnDelete')).nativeElement).not.toBeNull();

    spyOn(component, 'delete').and.callThrough();
    spyOn(movieService, 'deleteMovie').and.callThrough();
    buttonDelete.query(By.css('.btnDelete')).nativeElement.click();
    expect(component.delete).toHaveBeenCalledWith(fakeMovie[0].id);
    expect(movieService.deleteMovie).toHaveBeenCalled();
  }));

  it('should have called function onselect()', fakeAsync(() =>{
    const onSelect: DebugElement = fixture.debugElement;
    spyOn(movieService, 'getMovies').and.returnValue(of(fakeMovie));
    component.ngOnInit();
    expect(component.movies).toEqual(fakeMovie);
    expect(onSelect.query(By.css('table tbody')).nativeElement).not.toBeNull();
    expect(onSelect.query(By.css('.btnDelete')).nativeElement).not.toBeNull();

    spyOn(component, 'onSelect').and.callThrough();
    onSelect.query(By.css('.onSelect')).nativeElement.click();
    expect(component.onSelect).toHaveBeenCalledWith(fakeMovie[0]);
  }));
  // it ('should use the movie name from the service', () => {
  //   // let fixture = TestBed.createComponent(MoviesComponent);
  //   // let component = fixture.debugElement.componentInstance;
  //   // let movieService = fixture.debugElement.injector.get(MovieService);
  //   fixture.detectChanges();
  //   expect(movieService.getMovies).toEqual(component.movies);
  // });
});
