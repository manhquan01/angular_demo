import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NgForm } from '@angular/forms';
import { BookModel } from '../models/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookEditForm: FormGroup;
  book: BookModel;
  activeForm: string = 'reactive';
  @ViewChild('NgForm', {static: false}) templateForm: NgForm;
  // @ViewChild('NgForm', { static: true }) templateForm: NgForm;
  // @ViewChild('f') form: any;
    // @ViewChild('NgForm', { static: true }) templateForm: NgForm;
  // @ViewChild('NgForm', { static: false }) templateForm: NgForm;


  constructor(fb: FormBuilder, private route: ActivatedRoute ) {
    this.bookEditForm = fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      description: [''],
      price: [''],
    });
    route.params.subscribe(res => {
       this.book = BookModel.find(res['title']);
       if (this.book == null) {
         this.book = new BookModel('', '', '', 0);
       }
    });
  }

  submitReactiveForm() {
    let bookData = this.prepareSaveBook();
    this.book = new BookModel(
      bookData.image,
      bookData.title,
      bookData.description,
      bookData.price,
      // bookData.upvotes,
    );
    this.book.save();
  }

  prepareSaveBook() {
    const formModel = this.bookEditForm.value;
    return formModel;
  }
  ngOnInit() {
  }

}
