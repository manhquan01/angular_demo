import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserApiComponent } from './edit-user-api.component';

describe('EditUserApiComponent', () => {
  let component: EditUserApiComponent;
  let fixture: ComponentFixture<EditUserApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
