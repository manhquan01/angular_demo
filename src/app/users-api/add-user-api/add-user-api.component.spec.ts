import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserApiComponent } from './add-user-api.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { UserApi } from 'src/app/data/user-api';
import { UserService } from 'src/app/user.service';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';

class DataStub {
  addUserApi(user: UserApi): Observable<UserApi> {
    return of(user);
  }
}

describe('AddUserApiComponent', () => {
  let component: AddUserApiComponent;
  let fixture: ComponentFixture<AddUserApiComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserApiComponent ],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule],
      providers: [
        { provide: UserService, useClass: DataStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.get(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty !', () => {
    expect(component.formAddUser.valid).toBeFalsy();
  });

  // it('should #addUser() called !', async( () => {
  //   spyOn(component, 'addUser').and.callThrough();
  //   spyOn(userService, 'addUserApi').and.returnValue(of(USERSAPI[0]));

  //   fixture.debugElement.query(By.css('.btn-submit')).nativeElement.click();

  //   expect(component.addUser).toHaveBeenCalled();
  //   expect(userService.addUserApi).toHaveBeenCalled();

  //   // console.log(component.ngForm)
  // }));

  it('name field validity', () => {
    let errors = {}
    let name = component.formAddUser.controls['name'];
    expect(name.valid).toBeFalsy();

    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();

    name.setValue('qu');
    errors = name.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    name.setValue('11111111111111111111111111111111111');
    errors = name.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
    expect(errors['maxlength']).toBeTruthy();

    name.setValue('quan');
    errors = name.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
    expect(errors['maxlength']).toBeFalsy();

  })

  it('email field validity', () => {
    let email = component.formAddUser.controls['email'];
    expect(email.valid).toBeTruthy();
  });

  it('phone field validity', () => {
    let phone = component.formAddUser.controls['phone_number'];
    expect(phone.valid).toBeTruthy();
  });

  it('submitting a form', () => {
    expect(component.formAddUser.valid).not.toBeTruthy();

    component.formAddUser.controls['name'].setValue('manhquan');
    component.formAddUser.controls['email'].setValue('manhquan1908@gmail.com');
    component.formAddUser.controls['phone_number'].setValue('123456789');

    expect(component.formAddUser.valid).toBeTruthy();
    let newUser: UserApi;

    const user: UserApi = new UserApi();
    user.name = component.formAddUser.value.name;
    user.email = component.formAddUser.value.email;
    user.phoneNumber = component.formAddUser.value.phone_number;

    spyOn(component, 'addUser').and.callThrough();
    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);

    spyOn(userService, 'addUserApi').and.callThrough();

    userService.addUserApi(user).subscribe((value) => newUser = value);

    expect(newUser.name).toEqual('manhquan');
    expect(newUser.email).toEqual('manhquan1908@gmail.com');
    expect(newUser.phoneNumber).toEqual('123456789');
    expect(userService.addUserApi).toHaveBeenCalled();
    expect(component.addUser).toHaveBeenCalled();
  });
});
