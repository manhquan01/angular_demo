import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserApiComponent } from './edit-user-api.component';
import {FormsModule} from "@angular/forms";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from "@angular/router";

describe('EditUserApiComponent', () => {
  let component: EditUserApiComponent;
  let fixture: ComponentFixture<EditUserApiComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
