import {browser, by, element, ElementArrayFinder, promise, ElementFinder} from 'protractor';
import { async } from 'q';

export class User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;

    static async fromLi(li: ElementFinder) {
        let stringsFromA = await li.all(by.css('tr td')).getText();
        // let strings = stringsFromA[0].split(' ');
        return stringsFromA;
    }
}
export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getTitleText() {
        return element(by.css('app-root h1')).getText() as Promise<string>;
    }

    getUserApi(){
        return element(by.css('[routerlink="users-api"]'));
    }

    addUserButton(){
        return element(by.css('[routerlink="/user-api-add"]'));
    }

    titlePageAddUser(){
        return element(by.css('.page-title')).getText();
    }

    inputName(){
        return element(by.css('#exampleInputName'));
    }

    inputEmail(){
        return element(by.css('#exampleInputEmail'));
    }

    inputPhone(){
        return element(by.css('#exampleInputPhone'));
    }

    btnSubmit(){
        return element(by.css('#save_post'));
    }

    navigateToListUser(){
        return browser.get('/users-api') as Promise<any>;
    }

    getPageElts() {
        return {
            tdUser: element.all(by.css('app-root app-list-users tbody'))
        }
    }

    
}
