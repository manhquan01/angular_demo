import {AppPage} from './app.po';
import {browser, logging} from 'protractor';
import { Employee } from '../../src/app/models/employee';
export const mockEmployee =
{
    id: 2,
    name: 'Nguyen Hien',
    team: 'C#',
    score: 600,
    id_employee: 3339
} as Employee;
describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Welcome to angular demo!');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });

    describe('workspace-project employees page', () => {
        it('should route to employees page', () => {
            page.navigateTo();
            page.getEmployeeButton().click();
            expect(page.getTextTitleListEmployee()).toEqual('Danh sách nhân viên Fresher');
        });

        beforeEach(() => {
            page.navigateToEmployee();
        });

        it('should display list of Employee Prehser', () => {
            // page.navigateToEmployee();
            expect(page.getTextTitleListEmployee()).toEqual('Danh sách nhân viên Fresher');
        });

        it('should display button Thêm mới nhân viên', () => {
            // page.navigateToEmployee();
            expect(page.getButtonAddNewEmployee()).toBeTruthy();
        });

        it('add New Employee Form should be invalid', () => {
            // page.navigateToEmployee();
            page.getButtonAddNewEmployee().click();
            page.getEmployeeNameFormAddNew().sendKeys('');
            page.getIdEmployeeFormAddNew().sendKeys();

            // tslint:disable-next-line: prefer-const
            let form = page.getFormAddNew().getAttribute('class');

            expect(form).toContain('ng-invalid');
        });

        it('add New Employee Form should be valid', () => {
            // page.navigateToEmployee();
            page.getButtonAddNewEmployee().click();
            page.getEmployeeNameFormAddNew().sendKeys('TestName');
            page.getIdEmployeeFormAddNew().sendKeys(1102);

            // tslint:disable-next-line: prefer-const
            let form = page.getFormAddNew().getAttribute('class');

            expect(form).toContain('ng-valid');
        });

        it('should display new Employee when add new employee', () => {
            // page.navigateToEmployee();
            page.getButtonAddNewEmployee().click();
            page.getEmployeeNameFormAddNew().sendKeys('TestName');
            page.getIdEmployeeFormAddNew().sendKeys(1102);

            page.getButtonSubmitAddNewEmployee().click();

            // browser.driver.sleep(5000);

            // browser.pause(4200);
        });
    });

    describe('workspace-project employee detail page', () => {
        it('should route to employee detail', () => {
            page.navigateToEmployee();
            page.getEmployeeById(11).click();
            expect(page.getTextTitleEmployeeDetail()).toEqual('Thông tin nhân viên');
        });

        it('shuould display infor Employee', () => {
            page.navigateToEmployeeDetail(11);
            expect(page.getTextTitleEmployeeDetail()).toEqual('Thông tin nhân viên');
        });

        it('should display button go back', () => {
            page.navigateToEmployeeDetail(mockEmployee.id);
            expect(page.getButtonGoBack()).toBeTruthy();
        });

   });
});
