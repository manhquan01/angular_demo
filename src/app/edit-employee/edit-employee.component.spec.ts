import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { EditEmployeeComponent } from './edit-employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from '../employee.service';
import { FakeEmployeeService } from '../fakeEmployeeService';
import { By } from '@angular/platform-browser';
import { Employee } from '../models/employee';

const mock =
{
  id: 2,
  name: 'Nguyen Hien',
  team: 'C#',
  score: 600,
  id_employee: 3339
} as Employee;

describe('EditEmployeeComponent', () => {
  let component: EditEmployeeComponent;
  let fixture: ComponentFixture<EditEmployeeComponent>;

  let service: EmployeeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployeeComponent ],
      imports: [ FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: EmployeeService,
          useClass: FakeEmployeeService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(EmployeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#saveUpdate', () => {
    it('should have button update when recived data', fakeAsync(() => {
      tick();
      // mock @Input employee = fakeEmployee = mock
      // tslint:disable-next-line: prefer-const
      let fakeEmployee: Employee = new Employee();
      fakeEmployee = mock;
      component.employee = fakeEmployee;
      fixture.detectChanges();
      const btnUpdate = fixture.debugElement.query(By.css('.update'));
      expect(btnUpdate).not.toBeNull();
    }));

    it('should call right function in component and service', fakeAsync(() => {
      tick();
      spyOn(component, 'saveUpdate').and.callThrough();
      spyOn(service, 'updateEmployee').and.callThrough();
      // mock @Input employee = fakeEmployee = mock
      // tslint:disable-next-line: prefer-const
      let fakeEmployee: Employee = new Employee();
      fakeEmployee.id_employee = mock.id_employee;
      fakeEmployee.name = mock.name;
      fakeEmployee.score = mock.score;
      fakeEmployee.team = mock.team;
      component.employee = fakeEmployee;
      fixture.detectChanges();
      fixture.debugElement.query(By.css('.update')).triggerEventHandler('click', null);
      expect(component.saveUpdate).toHaveBeenCalled();
      expect(service.updateEmployee).toHaveBeenCalledWith(fakeEmployee);
    }));
  });
});
