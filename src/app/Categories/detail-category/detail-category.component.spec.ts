import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCategoryComponent } from './detail-category.component';

describe('DetailCategoryComponent', () => {
  let component: DetailCategoryComponent;
  let fixture: ComponentFixture<DetailCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCategoryComponent ]
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
