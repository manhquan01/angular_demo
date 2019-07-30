import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { EmployeesComponent } from './employees.component';
import { EmployeeService } from '../employee.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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

  describe('#onClickSubmit', () => {
    it('should call right function in component and service When click button', fakeAsync(() => {
      tick();

    }));
  });


});
