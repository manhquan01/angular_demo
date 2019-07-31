import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { FormsModule } from '@angular/forms';
import { MovieService } from 'src/app/movie.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Movie } from 'src/models/movie';
// import { FakeMovieService } from '../fake-movie-service.service';

export const mock =
{
  id: 4,
  name: 'King',
  year: 1995
} as Movie;

export class FakeMovieService {
  public getMovieFormServiceById(id: number): Observable<Movie> {
    return of(mock);
  }
  public deleteMovie(id: number): Observable<Movie> {
    return of();
  }
  public updateMovie(movie: Movie): Observable<Movie> {
    return of(movie);
  }
  public getMovieFromId(id: number): Observable<Movie> { // đầu vào là id, đầu ra là đối tượng movie được quan sát
    // return of(fakeMovies.find(movie => movie.id === id));
    return of(mock);
  }
}
describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;
  let service: MovieService;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailComponent ],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      // providers: [MovieService]
      providers: [{
          provide: MovieService,
          useClass: FakeMovieService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(MovieService);
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#goBack', () => {
    it('should call right function in component when click buttun goBack', () => {
      spyOn(component, 'goBack').and.callThrough();
      fixture.debugElement.query(By.css('.goBack')).triggerEventHandler('click', null);
      expect(component.goBack).toHaveBeenCalled();
    });
  });

  describe('#Save Edit()', () => {
    it('have btn Save when recived data', fakeAsync(() => {
      tick();
      spyOn(service, 'getMovieFromId').and.returnValue(of(mock));
      const btnSave = fixture.debugElement.query(By.css('.save'));
      component.ngOnInit();
      expect(btnSave).not.toBeNull();
    }));

    it('call right function in component when click btn save', fakeAsync(() => {
      tick();
      spyOn(component, 'save').and.callThrough();
      spyOn(service, 'updateMovie').and.callThrough();
      spyOn(service, 'getMovieFromId').and.returnValue(of(mock));
      component.ngOnInit();
      fixture.debugElement.query(By.css('.save')).triggerEventHandler('click', mock.id);
      expect(component.save).toHaveBeenCalled();
      expect(service.updateMovie).toHaveBeenCalledWith(mock);

    }));
  });
  describe('#delete()', () => {
    it('should have button delete when recived data', fakeAsync(() => {
      tick();
      spyOn(service, 'getMovieFromId' ).and.returnValue(of(mock));
      const btnDelete = fixture.debugElement.query(By.css('.delete'));
      component.ngOnInit();
      expect(btnDelete).not.toBeNull();
    }));

    it('should call right function in service', fakeAsync(() => {
      tick();
      spyOn(component, 'delete').and.callThrough();
      spyOn(service, 'deleteMovie').and.callThrough();
      spyOn(service, 'getMovieFromId').and.returnValue(of(mock));
      component.ngOnInit();
      fixture.debugElement.query(By.css('.delete')).triggerEventHandler('click', mock.id);
      expect(component.delete).toHaveBeenCalled();
      expect(service.deleteMovie).toHaveBeenCalledWith(mock.id);
    }));
  });

  describe ('#getMovieFromRoute() service by id', () => {
    it('call right function in service', fakeAsync(() => {
      tick();
      spyOn(component, 'getMovieFromRoute').and.callThrough();
      spyOn(service, 'getMovieFromId').and.callThrough();
      component.ngOnInit();
      expect(component.getMovieFromRoute).toHaveBeenCalled();
      expect(service.getMovieFromId).toHaveBeenCalled();
    }));
  });

});
