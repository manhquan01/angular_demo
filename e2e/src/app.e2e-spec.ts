import {AppPage} from './app.po';
import {browser, logging, element, by} from 'protractor';
import * as faker from 'faker';
import { MovieDetailPage } from './movie/detail.po';


describe('workspace-project App', () => {
    let page: AppPage;
    // let movieDetailPage: MovieDetailPage;
    beforeEach(() => {
        // browser.waitForAngularEnabled(false);
        page = new AppPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('PHP Fresher GMOToanNV');
    });
    it('should display top 5 movie', () => {
        // page.navigateTo();
        page.getAboutButton().click();
        expect(page.getDasboardText()).toEqual('Top 5 movie');
    });

    it('should delete movie', () => {
        const id = '19';
        page.submitBtnDelete(id).click();

        expect(page.submitBtnDelete(id)).not.toBeNull();
        // browser.pause(4200);
    });

    // it('should validate add form', () => {
    //     const name = '';
    //     const year = '1995';
    //     const id = '15';

    //     page.setName(name);
    //     page.setYear(year);

    //     expect(element(by.css('#validate-name')).toBeTruthy());
    // });


    // it('should edit movie', () => {
    //     // // page.navigateTo();
    //     // // page.getMovieLink().click();
    //     // // page.getMovieNameInput().sendKeys('12345');
    //     // page.movieName.sendKeys('toan');
    //     // // page.getMoviYearInput().sendKeys('1295');
    //     // page.movieYear.sendKeys('1995');
    //     // // page.getBtnAdd().click();
    //     // page.submmitReactive();
    //     // // browser.pause(4200);


    //     const name = 'toan';
    //     const year = '1995';
    //     const id = '15';

    //     const movieDetailPage = new MovieDetailPage(id);
    //     movieDetailPage.setName(name);
    //     movieDetailPage.setYear(year);
    //     // movieDetailPage.getSaveButton().click();
    //     // movieDetailPage.getPage(id);
    //     expect(movieDetailPage.idElement.getText()).toEqual(id);
    //     expect(movieDetailPage.getName()).toEqual(name);
    //     expect(movieDetailPage.getYear()).toEqual(year);
    // });

    // it('should have reactive form edit working', () => {
    //     const name = 'toan';
    //     const year = '1995';
    //     const id = '17';

    //     // page.submitEdit(id).click();

    //     const movieDetailPage = new MovieDetailPage(id);
    //     movieDetailPage.getPage(id);
    //     movieDetailPage.setName(name);
    //     movieDetailPage.setYear(year);
    //     movieDetailPage.getSaveButton();

    //     // page.submitEdit(id).click();

    //     // expect(movieDetailPage.getId()).toEqual(id);
    //     // expect(movieDetailPage.getName()).toEqual(name);
    //     // expect(movieDetailPage.getYear()).toEqual(year);
    //     browser.pause(4200);
    // });

    it('should have reactive form add movie working', () => {
        const name = 'toan';
        const year = '1995';
        const id = '19';

        page.setName(name);
        page.setYear(year);
        page.submmitReactive();
        page.submitEdit(id).click();

        const movieDetailPage = new MovieDetailPage(id);

        expect(movieDetailPage.getId()).toEqual(id);
        expect(movieDetailPage.getName()).toEqual(name);
        expect(movieDetailPage.getYear()).toEqual(year);
        // browser.pause(4200);
    });
    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
