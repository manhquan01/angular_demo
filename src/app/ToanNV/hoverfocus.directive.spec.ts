import { HoverfocusDirective } from './hoverfocus.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { RouterTestingModule } from '@angular/router/testing';


@Component({
  template: `<input type="text" appHoverfocus>
              <h1 appHoverfocus> {{title}} </h1>
            `
})
class TestHoverFocusComponent {
    title = 'GMO';
}

describe('HoverfocusDirective', () => {
  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let inputEl: DebugElement;
  let directive: HoverfocusDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [TestHoverFocusComponent, HoverfocusDirective],
        // providers: [Element],
        imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(TestHoverFocusComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  // it('should create an instance', () => {
  //   // const directive = new HoverfocusDirective();
  //   expect(directive).toBeTruthy();
  // });

  it('hovering over input', () => {
    inputEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('green');

    inputEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('blanchedalmond');
  });
  it(`should have as title`, () => {
    expect(component.title).toEqual('GMO');
  });

  it(`should render directive in a class h1 'PHP Fresher GMO'`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('PHP Fresher GMO');
  });
});
