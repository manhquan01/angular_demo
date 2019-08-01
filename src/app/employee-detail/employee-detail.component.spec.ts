import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { EmployeeDetailComponent } from './employee-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from '../employee.service';
import { By } from '@angular/platform-browser';
import { Employee, mockEmployee } from '../models/employee';
import { Observable, of } from 'rxjs';
import { FakeEmployeeService } from '../fakeEmployeeService';


export const mock =
{
  id: 2,
  name: 'Nguyen Hien',
  team: 'C#',
  score: 600,
  id_employee: 3339
} as Employee;

describe('EmployeeDetailComponent', () => {
  let component: EmployeeDetailComponent;
  let fixture: ComponentFixture<EmployeeDetailComponent>;
  let service: EmployeeService;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: EmployeeService,
          useClass: FakeEmployeeService
        }
      ]
      // providers: [EmployeeService]
    })
    .compileComponents();
    // .then(() => {
    //   FakeEmployeeService = fixture.debugElement.injector.get(EmployeeService);
    // });
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
    it('should have button delete when recived data', fakeAsync(() => {
      tick();
      spyOn(service, 'getEmployeeFromServerById').and.returnValue(of(mock));
      const btnDelete = fixture.debugElement.query(By.css('.delete'));
      component.ngOnInit();
      expect(btnDelete).not.toBeNull();
    }));

    it('should call right function in component and service when click button delete', fakeAsync(() => {
      tick();
      spyOn(component, 'delete').and.callThrough();
      spyOn(service, 'delete').and.callThrough();
      spyOn(service, 'getEmployeeFromServerById').and.returnValue(of(mock));
      component.ngOnInit();
      fixture.debugElement.query(By.css('.delete')).triggerEventHandler('click', null);
      expect(component.delete).toHaveBeenCalled();
      expect(service.delete).toHaveBeenCalledWith(mock.id);
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

  describe('#getInforEdit', () => {
    it('should have button edit when recived data', fakeAsync(() => {
      tick();
      spyOn(service, 'getEmployeeFromServerById').and.returnValue(of(mock));
      const btnEdit = fixture.debugElement.query(By.css('.edit'));
      component.ngOnInit();
      expect(btnEdit).not.toBeNull();
    }));

    it('should call right function in component when click button edit', fakeAsync(() => {
      tick();
      spyOn(service, 'getEmployeeFromServerById').and.returnValue(of(mock));
      spyOn(component, 'getInforEdit').and.callThrough();
      component.ngOnInit();
      fixture.debugElement.query(By.css('.edit')).triggerEventHandler('click', mock.id);
      expect(component.getInforEdit).toHaveBeenCalledWith(mock);
    }));
  });

  describe('#goBack', () => {
    it('should call right function in component when click buttun goBack', () => {
      spyOn(component, 'goBack').and.callThrough();
      fixture.debugElement.query(By.css('.goBack')).triggerEventHandler('click', null);
      expect(component.goBack).toHaveBeenCalled();
    });
  });

});
