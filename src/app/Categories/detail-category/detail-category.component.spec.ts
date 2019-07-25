import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCategoryComponent } from './detail-category.component';
import {MessageComponent} from '../message/message.component';

describe('DetailCategoryComponent', () => {
  let component: DetailCategoryComponent;
  let fixture: ComponentFixture<DetailCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailCategoryComponent,
        MessageComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
