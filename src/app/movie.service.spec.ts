import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

let service: MovieService ;
describe('MovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [MovieService]
  }));

  beforeEach(() =>{
    service = TestBed.get(MovieService);
  });
  it('Movie Service should be created', () => {
    // const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

});
