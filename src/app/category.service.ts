import { Injectable } from '@angular/core';
import { Category } from './data/category';
import {CATEGORIES} from './data/mock-categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Category[] {
    return CATEGORIES;
  }
}
