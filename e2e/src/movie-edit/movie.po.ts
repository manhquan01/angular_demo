import { element, by, browser } from 'protractor';

export class MovieEditPage {
    movieName: any;
    movieYear: any;
    id: any;
    submmitButtonReactive: any;

    constructor() {
        this.getPage();

        this.movieName = element(by.css('#movie-name-input'));
        this.movieYear = element(by.css('#movie-year-input'));
        this.submmitButtonReactive = element(by.id('.btnAdd'));
    }
    navigateTo() {
        return browser.get('/movies');
    }
    getPage(): void {
        browser.get('/movies');
    }

    setName(text: string) {
        this.movieName.sendKeys(text);
    }

    setYear(text: number) {
        this.movieYear.sendKeys(text);
    }
    submmitReactive() {
        this.submmitButtonReactive.click();
    }
}
