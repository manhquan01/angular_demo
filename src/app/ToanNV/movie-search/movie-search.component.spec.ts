import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchComponent } from './movie-search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieService } from 'src/app/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieSearchComponent', () => {
  let component: MovieSearchComponent;
  let fixture: ComponentFixture<MovieSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSearchComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [MovieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
