import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { EmployeesComponent } from './employees.component';
import { EmployeeService } from '../employee.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Employee } from '../models/employee';
import { By } from '@angular/platform-browser';

const mock = {
  name: 'Nguyen Hien',
  team: 'C#',
  score: 600,
  id_employee: 3339
} as Employee;

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;
  let service: EmployeeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule ],
      providers: [ EmployeeService ],
      declarations: [ EmployeesComponent ]
  })
    .compileComponents();
  }));

  beforeEach(() => {
    // create an instance of EmployeesComponent
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(EmployeeService);
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#getAllEmployeeFromService()', () => {
    it('should call right function in service', fakeAsync(() => {
      // .and.callThrough(): phương thức thực tế vẫn sẽ được gọi.
      // Spy trong TH này để biết liệu phương thức này có thực sự được gọi k và theo dõi các arguments
      tick();
      spyOn(service, 'getAllEmployeeFromServer').and.callThrough();
      spyOn(component, 'getAllEmployeeFromService').and.callThrough();
      component.ngOnInit();
      expect(component.getAllEmployeeFromService).toHaveBeenCalled();
      expect(service.getAllEmployeeFromServer).toHaveBeenCalled();

    }));
  });

  describe('#creatForm', () => {
    it('form invalid when empty', () => {
      expect(component.employeeFormGroup.valid).toBeFalsy();
    });

    it('name field validity', () => {
      // tslint:disable-next-line: prefer-const
      let name = component.employeeFormGroup.controls.name;
      expect(name.valid).toBeFalsy();

      // when name field have length < 2
      name.setValue('A');
      expect(name.valid).toBeFalsy();

      // When name field have length >= 2
      name.setValue('Test');
      expect(name.valid).toBeTruthy();
    });

    it('team field validity', () => {
      // tslint:disable-next-line: prefer-const
      let team = component.employeeFormGroup.controls.team;
      expect(team.valid).toBeTruthy(); // in html set up default team = teams[0].
                                       // And it can change value from array teams
      team.setValue('TestTeam');
      expect(team.valid).toBeTruthy();
    });

    it('id_employee field validity', () => {
      // tslint:disable-next-line: prefer-const
      let id_employee = component.employeeFormGroup.controls.id_employee;
      expect(id_employee.valid).toBeFalsy();

      id_employee.setValue('1234');
      expect(id_employee.valid).toBeTruthy();
    });
  });

  describe('#onClickSubmit', () => {
    it('should call right function in component and service When click button', fakeAsync(() => {
      tick();
      spyOn(component, 'onClickSubmit').and.callThrough();
      spyOn(service, 'addNewEmployeeToServer').and.callThrough();

      // gán giá trị của employeeFormGroup = mock
      // (ngSubmit)="onClickSubmit(mock)
      // sẽ tự động lấy giá trị này làm tham số và gọi hàm onClickSubmit(mock) trong component
      component.employeeFormGroup.setValue(mock);
      fixture.debugElement.query(By.css('.formSubmit')).triggerEventHandler('ngSubmit', null);
      expect(component.onClickSubmit).toHaveBeenCalledWith(mock);

      // tham số đầu vào của addNewEmployeeToServer() là một Employee nên cần phải fakeEmployee có kiểu là Employee
      // tslint:disable-next-line: prefer-const
      let fakeEmployee: Employee = new Employee();
      fakeEmployee.id_employee = mock.id_employee;
      fakeEmployee.name = mock.name;
      fakeEmployee.score = mock.score;
      fakeEmployee.team = mock.team;
      expect(service.addNewEmployeeToServer).toHaveBeenCalledWith(fakeEmployee);
    }));
  });


});
