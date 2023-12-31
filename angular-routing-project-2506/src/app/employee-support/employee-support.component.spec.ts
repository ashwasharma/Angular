import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSupportComponent } from './employee-support.component';

describe('EmployeeSupportComponent', () => {
  let component: EmployeeSupportComponent;
  let fixture: ComponentFixture<EmployeeSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeSupportComponent]
    });
    fixture = TestBed.createComponent(EmployeeSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
