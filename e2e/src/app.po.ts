import {browser, by, element} from 'protractor';

export class AppPage {

    movieName: any;
    movieYear: any;
    id: any;
    submmitButtonReactive: any;
    btnEdit: any;
    constructor() {
        this.getMoviePage();

        this.movieName = element(by.css('#movie-name-input'));
        this.movieYear = element(by.css('#movie-year-input'));
        this.submmitButtonReactive = element(by.css('.btnAdd'));
        this.btnEdit = element(by.css('#btnEdit' + this.id));
    }

    navigateTo() {
        // return browser.get(browser.baseUrl) as Promise<any>;
        return browser.get('/movies');
    }
    getMoviePage(): void {
        browser.get('/movies');
    }
    setName(text: string) {
        this.movieName.sendKeys(text);
    }
    setYear(text: any) {
        this.movieYear.sendKeys(text);
    }
    submmitReactive() {
        this.submmitButtonReactive.click();
    }
    submitEdit(id: any) {
        return element(by.css('#btnEdit' + id));
        // this.btnEdit.click();
    }
    submitBtnDelete(id: any) {
        return element(by.css('#btnDelete' + id));
        // this.btnEdit.click();
    }
    getTitleText() {
        return element(by.css('app-root h6')).getText() as Promise<string>;
    }
    getDasboardText() {
        return element(by.css('app-root h3')).getText() as Promise<string>;
    }
    getAboutButton() {
        return element(by.css('[routerLink="/dashboard"]'));
    }
    getMovieLink() {
        return element(by.css('[routerLink="/movies"]'));
    }
    getEditLink(id: any) {
        return element(by.css('[routerLink="/detail/"]' + id));
    }
   
// DETAILS
    // getDetailNameInput() {
    //     return element(by.css())
    // }



    // getBtnAdd() {
    //     return element(by.css('#btnAdd'));
    // }
    // getMovieNameInput() {
    //     return element(by.css('#movie-name-input'));
    // }
    // getMoviYearInput() {
    //     return element(by.css('#movie-year-input'));
    // }
}
