import { async, ComponentFixture, TestBed, fakeAsync, tick, getTestBed } from '@angular/core/testing';

import { ListUsersComponent } from './list-users.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { UserService } from 'src/app/user.service';
import { Observable, of } from 'rxjs';
import { USERSAPI, USERFAKE } from 'src/app/data/mock-users';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { UserApi } from 'src/app/data/user-api';

class DataStub {
  getUsersFromApi(): Observable<UserApi[]> {
    return of(USERFAKE);
  }

  deleteUserApi(user: number): Observable<any> {
    return of(user);
  }
}

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;
  let userService: UserService;
  // const mockUsers = [
  //   {id: 1, name: "quan", email: "quan@gmail.com", phoneNumber: '123456789'},
  //   {id: 2, name: "quan1", email: "quan1@gmail.com", phoneNumber: '987654321'}
  // ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsersComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        UserService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.get(UserService);
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should #getUsersFromService() called !', () => {
    spyOn(userService, 'getUsersFromApi').and.callThrough();
    component.ngOnInit();
    expect(component.getUsersFromService).toBeTruthy();
    expect(userService.getUsersFromApi).toHaveBeenCalled();
    expect(component.users).toBeTruthy();
  });
  
});

describe('ListUserComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;
  let userService: UserService;
  beforeEach(async( () => {
    TestBed.configureTestingModule({
      declarations: [ListUsersComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: UserService, useClass: DataStub }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.get(UserService);
  });

  it('should show list users & delete button called !', fakeAsync(() => {
    const bannerDe: DebugElement = fixture.debugElement;
    spyOn(userService, 'getUsersFromApi').and.returnValue(of(USERSAPI));
    component.ngOnInit();
    expect(component.users).toEqual(USERSAPI);
    expect(bannerDe.query(By.css('table tbody')).nativeElement).not.toBeNull();
    expect(bannerDe.query(By.css('.btn_delete')).nativeElement).not.toBeNull();

    spyOn(component, 'delete').and.callThrough();
    spyOn(userService, 'deleteUserApi').and.callThrough();
    bannerDe.query(By.css('.btn_delete')).nativeElement.click();
    expect(component.delete).toHaveBeenCalledWith(USERSAPI[0].id);
    expect(userService.deleteUserApi).toHaveBeenCalled();
  }));
});