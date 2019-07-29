export interface BookInterface {
    image: string,
    title: string,
    description: string,
    price: number,
    upvotes: number
}

export class BookModel implements BookInterface {
    constructor(
        public image: string,
        public title: string,
        public description: string,
        public price: number,
        public upvotes: number = 0
    ) { }

    public static query() {
        let books:Array<BookModel> = JSON.parse(localStorage.getItem('books') || '[]');
        let bookModels: BookModel[] = []
        for (let book of books) {
            bookModels.push( new BookModel(
                book.image,
                book.title,
                book.description,
                book.price,
                book.upvotes
                ));
            }
        return bookModels;
        }

    public static find(title: string) {
        let books:Array<BookModel> = JSON.parse(localStorage.getItem('books') || '[]');
        for (let book of books) {
            if (book.title == title) {
                return new BookModel(
                    book.image,
                    book.title,
                    book.description,
                    book.price,
                    book.upvotes
                    );
            }
        }
        return null;
    }

    save() {
        let books: Array<BookModel> = JSON.parse(localStorage.getItem('books') || '[]');
        books.forEach((item, index) => {
            if (item.title === this.title) {
                books.splice(index, 1);
            }
        });
        books.push(this);
        localStorage.setItem('books', JSON.stringify(books));
        return true;
    }

    destroy() {
        let books: Array<BookModel> = JSON.parse(localStorage.getItem('books') || '[]');
        books.forEach((item, index) => {
            if (item.title === this.title) {
                books.splice(index, 1);
                localStorage.setItem('books', JSON.stringify(books));
            }
        });
        return null;
    }
}
