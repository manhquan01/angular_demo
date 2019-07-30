import * as faker from 'faker';
import { BookModel } from './book.model';

describe('BookModel', () => {
    let image: string;
    let title: string;
    let description: string;
    let price: number;
    let upvotes: number;

    // let book: BookModel;

    beforeEach(() => {
        image = faker.image.image();
        title = faker.lorem.sentence();
        description = faker.lorem.sentence();
        price = faker.random.number();
        upvotes = faker.random.number();
        // this.book = new BookModel(image, title, description, price, upvotes);

        let storage = {};

        spyOn(window.localStorage, 'getItem').and.callFake((key: string): string => {
            return storage[key] || null;
        });
        spyOn(window.localStorage, 'removeItem').and.callFake((key: string): void => {
            delete storage[key];
        });
        spyOn(window.localStorage, 'setItem').and.callFake((key: string, value: string): string => {
            return storage[key] = value as string;
        });
        spyOn(window.localStorage, 'clear').and.callFake(() => {
            storage = {};
        });
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('has the destroy method working', () => {
        let book = new BookModel(image, title, description, price, upvotes);
        book.save();
        book.destroy();
        let bookFromStorage: BookModel = BookModel.find(book.title);
        expect(bookFromStorage).not.toBeTruthy();
        expect(bookFromStorage).toEqual(null);

    });
    it('has the find and save method working', () => {
        let book = new BookModel(image, title, description, price, upvotes);
        book.save();
        let bookFromStorage: BookModel = BookModel.find(book.title);
        expect(book).toEqual(bookFromStorage);
    });

    it('has localStorage working', () => {
        expect<any>(localStorage.setItem('key', 'value')).toBe('value');
        expect<any>(localStorage.getItem('key')).toBe('value');
    });

    it(' has a valid model', () => {
        let book = new BookModel(image, title, description, price, upvotes);
        expect(book.image).toEqual(image);
        expect(book.title).toEqual(title);
        expect(book.description).toEqual(description);
        expect(book.price).toEqual(price);
        expect(book.upvotes).toEqual(upvotes);
    });
});
