import { Component, OnInit, Input } from '@angular/core';
import {Category} from '../../data/category';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent implements OnInit {
  @Input() category: Category;
  constructor() { }

  ngOnInit() {
  }

}
