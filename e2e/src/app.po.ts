import {browser, by, element, ElementFinder} from 'protractor';
export class AppPage {

    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getTitleText() {
        return element(by.css('app-root h1')).getText() as Promise<string>;
    }

    navigateToEmployee() {
        return browser.get('/employees');
    }

    getTextTitleListEmployee() {
        return element(by.css('app-employees h1')).getText() as Promise<string>;
    }

    getButtonAddNewEmployee() {
        return element(by.css('#formInsert'));
    }

    getEmployeeButton() {
        return element(by.css('[ng-reflect-router-link="employees"]'));
    }

    getEmployeeById(id: number): ElementFinder {
        return element(by.css(`[ng-reflect-router-link="/employee,detail,${id}"]`));
    }

    getTextTitleEmployeeDetail() {
        return element(by.css('app-employee-detail h1')).getText();
    }

    navigateToEmployeeDetail(id: number) {
        return browser.get(`/employee/detail/${id}`);
    }

    getButtonGoBack() {
        return element(by.css('.goBack'));
    }
}
