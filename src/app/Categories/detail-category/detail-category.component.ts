import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {Category} from '../../data/category';

@Component({
    selector: 'app-detail-category',
    templateUrl: './detail-category.component.html',
    styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent implements OnChanges, OnInit {

    @Input() category: Category;
    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.category) {
            console.log('123');
        }
    }

    ngOnInit() {
    }

}
