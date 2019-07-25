import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { BookComponent } from '../book/book.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MoviesComponent,
        BookComponent,
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
