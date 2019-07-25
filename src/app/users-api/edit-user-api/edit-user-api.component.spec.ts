import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserApiComponent } from './edit-user-api.component';
import {FormsModule} from "@angular/forms";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from "@angular/router";
import { UserService } from 'src/app/user.service';

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
          HttpClientTestingModule
      ],
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
});
