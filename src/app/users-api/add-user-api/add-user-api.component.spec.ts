import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserApiComponent } from './add-user-api.component';

describe('AddUserApiComponent', () => {
  let component: AddUserApiComponent;
  let fixture: ComponentFixture<AddUserApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
