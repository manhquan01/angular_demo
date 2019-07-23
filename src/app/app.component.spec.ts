import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
    let fixture;
    let app;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
    });
    afterEach(() => {
       fixture = null;
       app = null; 
    });


    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    it(`should have as title 'angular-demo'`, () => {
        expect(app.title).toEqual('angular-demo');
    });


    it('should render title in a h1 tag', () => {
        // const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-demo!');
    });

    it('should render hello Toan when loggin', () =>{
        
    });
});
