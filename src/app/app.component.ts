import {Component} from '@angular/core';
import { BookModel } from './ToanNV/models/book.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'PHP Fresher - GMO-Z-Runsystem.net';
    public cart: BookModel[] = [];

    public book: BookModel = new BookModel(
        // tslint:disable-next-line: max-line-length
        'https://toidicodedao.files.wordpress.com/2019/07/which-programming-langauge-should-i-learn-first-itonlinelearning.jpg?w=672&h=372&crop=1',
        'Toan NV',
        'Hrllo hahahah kkk mini',
        15,
        0
    );

    addToCart(book: BookModel) {
        this.cart.push(book);
    }
}
