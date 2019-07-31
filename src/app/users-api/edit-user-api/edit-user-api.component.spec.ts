import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserApiComponent } from './edit-user-api.component';
import {FormsModule} from "@angular/forms";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { UserService } from 'src/app/user.service';
import { ReactiveFormsModule} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { UserApi } from 'src/app/data/user-api';
import { By } from '@angular/platform-browser';
import { USERSAPI } from 'src/app/data/mock-users';

class DataStub{
  getUserApi(id: number){
    return of(USERSAPI[1]);
  }
  updateUserApi(user: UserApi): Observable<any>{
    return of(user);
  }
}

describe('EditUserApiComponent', () => {
  let component: EditUserApiComponent;
  let fixture: ComponentFixture<EditUserApiComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserApiComponent ],
      imports: [
          FormsModule,
          RouterTestingModule,
          HttpClientTestingModule,
          ReactiveFormsModule,
      ],
      providers: [
        {provide: UserService, useClass: DataStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.get(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should #getUserApi() called !', () => {
    spyOn(userService, 'getUserApi').and.callThrough();
    component.ngOnInit();
    expect(component.getIdUser).toBeTruthy();
    expect(userService.getUserApi).toHaveBeenCalled();
  });

  it('name field validity', () => {
    let errors = {};
    let name = component.formEditUser.controls['name'];
    expect(name.valid).not.toBeTruthy();

    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();

    name.setValue('qu');
    errors = name.errors || {};
    expect(errors['required']).not.toBeTruthy();
    expect(errors['minlength']).toBeTruthy();

    name.setValue('11111111111111111111111111111111111111');
    errors = name.errors || {};
    expect(errors['required']).not.toBeTruthy();
    expect(errors['minlength']).not.toBeTruthy();
    expect(errors['maxlength']).toBeTruthy();

    name.setValue('manhquan');
    errors = name.errors || {};
    expect(errors['required']).not.toBeTruthy();
    expect(errors['minlength']).not.toBeTruthy();
    expect(errors['maxlength']).not.toBeTruthy();
  });

  it('email field validity', () => {
    let email = component.formEditUser.controls['email'];
    expect(email.valid).toBeTruthy();
  });

  it('phone field validity', () => {
    let phone = component.formEditUser.controls['phone_number'];
    expect(phone.valid).toBeTruthy();
  });

  it('submitting a form', () => {
    let newValue: UserApi;
    expect(component.formEditUser.valid).not.toBeTruthy();

    component.formEditUser.controls['name'].setValue('manhquan');
    component.formEditUser.controls['email'].setValue('manhquan1908@gmail.com');
    component.formEditUser.controls['phone_number'].setValue('9876543210');
    expect(component.formEditUser.valid).toBeTruthy();

    const user = new UserApi();
    user.name = component.formEditUser.value.name;
    user.email = component.formEditUser.value.email;
    user.phoneNumber = component.formEditUser.value.phone_number;

    spyOn(userService, 'updateUserApi').and.callThrough();
    userService.updateUserApi(user).subscribe((value) => newValue = value);
    expect(newValue.name).toEqual('manhquan');
    expect(newValue.email).toEqual('manhquan1908@gmail.com');
    expect(newValue.phoneNumber).toEqual('9876543210');
    expect(userService.updateUserApi).toHaveBeenCalled();
  });

  it('should #save right called !', () => {
    spyOn(userService, 'getUserApi').and.returnValue(of(USERSAPI[0]));
    component.ngOnInit();

    expect(component.user).toEqual(USERSAPI[0]);
    expect(fixture.debugElement.query(By.css('#save_post')).nativeElement).toBeTruthy();
    spyOn(component, 'save').and.callThrough();
    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
    expect(component.save).toHaveBeenCalled();
  });
});
