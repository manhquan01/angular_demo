import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BookModel } from '../models/book.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: BookModel;
  @Output() addToCart: EventEmitter <BookModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendToCart() {
    this.addToCart.emit(this.book);
  }

  votesCounter() {
    return this.book.upvotes;
  }
  upvote() {
    return this.book.upvotes++;
  }

}
