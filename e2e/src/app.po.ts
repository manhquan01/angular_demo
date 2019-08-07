import {browser, by, element, ElementFinder} from 'protractor';
export class AppPage {

    // Employees Page
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
        return element(by.css('.themNhanVien'));
    }

    getEmployeeButton() {
        return element(by.css('[ng-reflect-router-link="employees"]'));
    }

    getEmployeeNameFormAddNew() {
        return element(by.css('#name'));
    }

    getIdEmployeeFormAddNew() {
        return element(by.css('#id_employee'));
    }

    getFormAddNew() {
        return element(by.css('.formSubmit'));
    }

    getButtonSubmitAddNewEmployee() {
        return element(by.css('.addNewEmployee'));
    }

    // Detail Employee Page
    navigateToEmployeeDetail(id: number) {
        return browser.get(`/employee/detail/${id}`);
    }

    getEmployeeById(id: number): ElementFinder {
        return element(by.css(`[ng-reflect-router-link="/employee,detail,${id}"]`));
    }

    getTextTitleEmployeeDetail() {
        return element(by.css('app-employee-detail h1')).getText();
    }

    getButtonGoBack() {
        return element(by.css('.goBack'));
    }

}
