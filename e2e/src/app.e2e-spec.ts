import {AppPage, User} from './app.po';
import {browser, logging, element, ElementArrayFinder} from 'protractor';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', () => {
        debugger;
        page.getTitleText();
        let a = 'quan';
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Welcome to angular-demo!');
    });

    it('should display list use get from API', () => {
        // page.navigateTo();
        page.getUserApi().click();
        // browser.pause(4421);
        expect(page.getUserApi().getText()).toEqual('Users API');
        expect(page.addUserButton().getText()).toEqual('Add User');
    });

    it('should display add user', () => {
        page.addUserButton().click();
        expect(page.titlePageAddUser()).toEqual('Add User');
    });

    it('should sent key form', async () => {
        page.inputName().sendKeys('Dao Manh Quan');
        page.inputEmail().sendKeys('manhquan1908@gmail.com');
        page.inputPhone().sendKeys('123456789');
        page.btnSubmit().click();

        const usersBefore = await toUserArray(page.getPageElts().tdUser);
        browser.debugger();
        expect(usersBefore.length).toEqual(2);
        // expect(usersBefore).toEqual({id: 1, name: 'qwweewe', email: 'quan', phoneNumber: '1212123'});
        // browser.pause(4422);
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });

    async function toUserArray(allUsers: ElementArrayFinder): Promise<User[]> {
        let promiseUsers = await allUsers.map(User.fromLi);
        return <Promise<any>> Promise.all(promiseUsers);
    }
});
