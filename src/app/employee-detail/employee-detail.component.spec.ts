import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { EmployeeDetailComponent } from './employee-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from '../employee.service';
import { By } from '@angular/platform-browser';
import { Employee } from '../models/employee';


describe('EmployeeDetailComponent', () => {
  let component: EmployeeDetailComponent;
  let fixture: ComponentFixture<EmployeeDetailComponent>;
  let service: EmployeeService;
  let debugElement: DebugElement;


  const mockEmployee =
  {
    id: 1,
    name: 'Nguyen Duy Su',
    team: 'PHP',
    score: 500,
    id_employee: 3349
  } as Employee;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(EmployeeService);
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#delete()', () => {
    it('should call right function in service', fakeAsync(() => {
      tick();
      spyOn(component, 'delete').and.callThrough();
      spyOn(service, 'delete').and.callThrough();
      // fixture.debugElement.query(By.css('#showInforEmployee')).nativeElement();
      // spyOn(component, 'getEmployeeFromServiceById').and.returnValue(Promise.resolve(mockEmployee));
      component.ngOnInit();
      debugElement.query(By.css('td.delete')).triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.delete).toHaveBeenCalled();
      expect(service.delete).toHaveBeenCalled();
    }));
  });

  describe('#getEmployeeFromServiceById()', () => {
    it('should call right function in service', fakeAsync(() => {
      tick();
      spyOn(component, 'getEmployeeFromServiceById').and.callThrough();
      spyOn(service, 'getEmployeeFromServerById').and.callThrough();
      component.ngOnInit();
      expect(component.getEmployeeFromServiceById).toHaveBeenCalled();
      expect(service.getEmployeeFromServerById).toHaveBeenCalled();
    }));
  });

});
