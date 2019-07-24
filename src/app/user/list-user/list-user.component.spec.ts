import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserComponent } from './list-user.component';
import {UserService} from '../../user.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable, of} from 'rxjs';

describe('ListUserComponent', () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;
  let userService: UserService;

  const fakeUser = {
    get() {
      return of([
        {id: 1, name: 'quan'},
        {id: 2, name: 'tuan'}
      ]);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserComponent ],
      providers: [
          UserService,
          HttpHandler,
          HttpClient,
      ],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // create component and test fixture
    fixture = TestBed.createComponent(ListUserComponent);
    // get test component from the fixture
    component = fixture.componentInstance;
    fixture.detectChanges();

    userService = TestBed.get(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should servive callede', () => {

    // spyOn(userService, 'test').and.returnValue(true);
    expect(component.testComponent).toBeTruthy();
    // expect(userService.test).toHaveBeenCalled();
  });
});
