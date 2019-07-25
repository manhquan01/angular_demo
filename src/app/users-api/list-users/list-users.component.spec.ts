import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ListUsersComponent } from './list-users.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { UserService } from 'src/app/user.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApi } from 'src/app/data/user-api';


describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;
  let userService: UserService;
  let targetElement;

  let mockUsers: UserApi = 
    {id: 1, name: "quan", email: "quan@gmail.com", phoneNumber: '123456789'}
   ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsersComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [UserService]
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

  // it('should show all users from API', fakeAsync(() => {
  //   // component.ngOnInit();
  //   fixture.detectChanges();
  //   const bannerDe: DebugElement = fixture.debugElement;
  //   const paragraphDe = bannerDe.query(By.css('.user1'));
  //   expect(paragraphDe).toBeNull();
  //   // spyOn(userService, 'getUsersFromService').and.returnValue(Promise.resolve(mockUsers));
  //   tick();
  //   fixture.detectChanges();
  //   const p: HTMLElement = paragraphDe.nativeElement;
  //   expect(p.textContent).toEqual('1');

  // }));
});
