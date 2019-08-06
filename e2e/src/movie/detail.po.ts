import { element, by, browser } from 'protractor';


export class MovieDetailPage {
    nameElement: any;
    yearElement: any;
    idElement: any;

    constructor(id: any) {
        // this.getPage(id);

        this.idElement = element(by.css('.movie-id1'));
        this.nameElement = element(by.css('.movie-name1'));
        this.yearElement = element(by.css('.movie-year1'));
        // this.
    }
    getPage(id: any): void {
        browser.get('/detail/' + id);
    }
    getId() {
        return this.idElement.getText() as Promise<string>;
     }
    getName() {
       return this.nameElement.getText() as Promise<string>;
    }
    getYear() {
        return this.yearElement.getText() as Promise<string>;
     }
    setName(text: string) {
        this.nameElement.sendKeys(text);
    }
    setYear(text: any) {
        this.yearElement.sendKeys(text);
    }
    getSaveButton() {
        return element(by.css('#btnSave')).click();
    }
}
