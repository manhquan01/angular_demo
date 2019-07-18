import { Component, OnInit } from '@angular/core';
import { CategoryService} from '../../category.service';
import {Category} from '../../data/category';
import {MessageService} from '../../message.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  constructor(
      private categoryService: CategoryService,
      private messageService: MessageService) { }

  titlePage = 'List Categories';
  categories: Category[];

  detailItem: Category;

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }
  getDetailItem(item: Category): void {
    this.detailItem = item;
    this.messageService.getMessage(`${new Date().toLocaleString()}`);
  }

}
