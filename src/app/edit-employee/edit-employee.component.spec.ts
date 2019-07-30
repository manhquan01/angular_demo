import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { EditEmployeeComponent } from './edit-employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from '../employee.service';
import { FakeEmployeeService } from '../fakeEmployeeService';
import { By } from '@angular/platform-browser';
import { Employee } from '../models/employee';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { of } from 'rxjs';

export const mock =
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

  let employeeDetailComponent: EmployeeDetailComponent;
  let fixtureEmployeeDetail: ComponentFixture<EmployeeDetailComponent>;
  let service: EmployeeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployeeComponent, EmployeeDetailComponent ],
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

    fixtureEmployeeDetail = TestBed.createComponent(EmployeeDetailComponent);
    employeeDetailComponent = fixtureEmployeeDetail.componentInstance;
    fixtureEmployeeDetail.detectChanges();

    service = TestBed.get(EmployeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#saveUpdate', () => {
    it('should have button update when recived data', fakeAsync(() => {
      tick();
      // component.employee = mock;
      fixtureEmployeeDetail.detectChanges();
      // let input = fixtureEmployeeDetail.nativeElement.querySelector('app-edit-employee').irnneText;
      // let input = fixtureEmployeeDetail.debugElement.query(By.directive(Employee));
      // input = mock;
      // component.employee = input;
      employeeDetailComponent.editEmployee = mock;
      fixtureEmployeeDetail.detectChanges();
      const btnUpdate = fixture.debugElement.query(By.css('.update'));
      expect(btnUpdate).not.toBeNull();
    }));

    it('should call right function in component and service', fakeAsync(() => {
      tick();
      spyOn(component, 'saveUpdate').and.callThrough();
      spyOn(service, 'updateEmployee').and.callThrough();
    }));
  });
});
