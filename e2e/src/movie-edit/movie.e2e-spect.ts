import * as faker from 'faker';
import { MovieEditPage } from './movie.po';
import { browser } from 'protractor';
import { MovieDetailPage } from '../movie/detail.po';
// import { MoviePage } from '../movie/detail.po';

describe('Movie edit page', () => {

    let movieEdit: MovieEditPage;
    let movieDetailPage: MovieDetailPage;

    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        movieEdit.navigateTo();
        movieEdit = new MovieEditPage();
    });

    it('should have reactive form working', () => {
        const name = faker.lorem.sentence();
        const year = '1995';
        const id = 15;

        this.movieEdit.setName(name);
        this.movieEdit.setYear(year);
        this.movieEdit.submitReactive();

        movieDetailPage = new MovieDetailPage(id);
        expect(movieDetailPage.id.getText()).toEqual(id);
        expect(movieDetailPage.nameElement.getText()).toEqual(name);
        expect(movieDetailPage.yearElement.getText()).toEqual(year);
    });
});
