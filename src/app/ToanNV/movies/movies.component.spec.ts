import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { MovieService } from 'src/app/movie.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { of } from 'rxjs';
import { Movie } from 'src/models/movie';
import { By } from '@angular/platform-browser';
import { FakeMovieService } from '../fake-movie-service.service';


export const mock: Movie[] =[
  { id: 1, name: 'King', year: 1995},
  { id: 2, name: 'Queen', year: 2005}
];

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let nativeElement: HTMLElement;


  let componentInfoComponent: MovieInfoComponent;
  let fixtureMovieInfo: ComponentFixture<MovieInfoComponent>;

  let movieService: MovieService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent, MovieInfoComponent ],
      // providers: [
      //   {
      //     provide: MovieService,
      //     useClass: FakeMovieService
      //   }
      // ],
      providers: [MovieService],

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
    nativeElement = fixture.nativeElement;

    movieService = TestBed.get(MovieService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call to a function add when clicked', () => {
    let spy = spyOn(component, 'add');
    let button = nativeElement.querySelector('button.btnAdd');
    button.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalled();
  });

  // describe('#delete()', () => {
  //   it('should have button delete when recived data', fakeAsync(() => {
  //     tick();
  //     spyOn(movieService, 'getMovieFromId' ).and.returnValue(of(mock));
  //     const btnDelete = fixture.debugElement.query(By.css('.btnDelete'));
  //     component.ngOnInit();
  //     expect(btnDelete).not.toBeNull();
  //   }));

  //   it('should call right function in service', fakeAsync(() => {
  //     tick();
  //     spyOn(component, 'delete').and.callThrough();
  //     spyOn(movieService, 'deleteMovie').and.callThrough();
  //     spyOn(movieService, 'getMovieFromId').and.returnValue(of(mock));
  //     component.ngOnInit();
  //     fixture.debugElement.query(By.css('.btnDelete')).triggerEventHandler('click', mock.id);
  //     expect(component.delete).toHaveBeenCalled();
  //     expect(movieService.deleteMovie).toHaveBeenCalledWith(mock.id);
  //   }));
  // });
  

  it('should getMovieFromService() called', () => {
    spyOn(movieService, 'getMovies').and.callThrough();
    component.ngOnInit();
    expect(component.getMoviesFromServices).toBeTruthy();
    expect(movieService.getMovies).toHaveBeenCalled();
    expect(component.getMoviesFromServices).toBeTruthy();
  });
});
