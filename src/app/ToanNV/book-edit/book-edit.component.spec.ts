import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { BookEditComponent } from './book-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as faker from 'faker';
import { BookModel } from '../models/book.model';
import { By } from '@angular/platform-browser';
// import { By } from 'selenium-webdriver';


describe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookEditComponent ],
      imports: [ RouterTestingModule, ReactiveFormsModule, FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
  });

  afterEach(() => {
    if (component.book) {
      component.book.destroy();
    }
  });

  function fillTheForm(image, title, description, price) {
    component.bookEditForm.controls.image.setValue(image);
    component.bookEditForm.controls['title'].setValue(title);
    component.bookEditForm.controls['description'].setValue(description);
    component.bookEditForm.controls['price'].setValue(price);
  }



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have blank fields in reactive form', () => {
    expect(component.bookEditForm.value).toEqual({
      image: '',
      title: '',
      description: '',
      price: '',
    });
  });

// 5. Testing template Driven Forms

// lỗi không xác định được form

  // it('should have title errors if less than 3 symbols provider',
  //   fakeAsync(() => {
  //     component.activeForm = 'tempalteDriven';
  //     fixture.detectChanges();
  //     let form = component.templateForm.form;
  //     tick();
  //     form.setValue({
  //       title2: 'test',
  //       image2: 'http://test.com',
  //       description2: 'none',
  //       price2: '100'
  //     });
  //     form.controls.title2.markAllAsTouched();
  //     fixture.detectChanges();
  //     expect(form.controls.title2.errors).toBeTruthy();
  //     expect(nativeElement.querySelector('.title-group').textContent).
  //     toContain('Title must be at least 3 characters long');
  //   })
  // );

  // it('should have price errors if incorrect value provider',
  //   fakeAsync(() => {
  //     component.activeForm = 'tempalteDriven';
  //     fixture.detectChanges();
  //     let form = component.templateForm.form;
  //     tick();
  //     form.setValue({
  //       title2: 'test',
  //       image2: 'http://test.com',
  //       description2: 'none',
  //       price2: '$100'
  //     });
  //     form.controls.title2.markAllAsTouched();
  //     fixture.detectChanges();
  //     expect(form.controls.title2.errors).toBeTruthy();
  //     form.controls.title2.setValue('100');
  //     expect(form.get('price2')).toBeTruthy();
  //   })
  // );

// Testing Reactive Form

  // it('should have submit button if required fields are not filled in',
  //   fakeAsync(() => {
  //     let spy = spyOn(component, 'submitReactiveForm');
  //     fillTheForm('', '', faker.lorem.paragraph(), faker.commerce.price());
  //     let button = nativeElement.querySelector('#reactiveSubmitBotton');
  //     button.dispatchEvent(new Event('click'));
  //     expect(spy).not.toHaveBeenCalled();
  //     expect(button.hasAttribute('disabled')).toBe(true);
  //   })
  // );

  it('should have submit enabled if requied fields are filled in',
    fakeAsync(() => {
      let spy = spyOn(component, 'submitReactiveForm').and.callThrough();
      fillTheForm(faker.image.image(), faker.lorem.sentence(),
        faker.lorem.paragraph(), faker.commerce.price());
      fixture.detectChanges();
      let button = fixture.debugElement.query(By.css('button')).nativeElement;
      button.click();
      expect(spy).toHaveBeenCalled();
      let bookFromStorage = BookModel.find(component.book.title);
      expect(bookFromStorage).toEqual(component.book);
    })
  );
});
