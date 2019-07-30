import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserApiComponent } from './add-user-api.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { UserApi } from 'src/app/data/user-api';
import { UserService } from 'src/app/user.service';
import { By } from '@angular/platform-browser';
import { USERSAPI } from 'src/app/data/mock-users';
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
});
