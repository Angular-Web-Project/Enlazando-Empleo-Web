import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginEmployeeComponent } from './auth-login-employee.component';

describe('AuthLoginEmployeeComponent', () => {
  let component: AuthLoginEmployeeComponent;
  let fixture: ComponentFixture<AuthLoginEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLoginEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLoginEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
