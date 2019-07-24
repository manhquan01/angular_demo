import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
        HttpClient,
        HttpHandler,
    ]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
