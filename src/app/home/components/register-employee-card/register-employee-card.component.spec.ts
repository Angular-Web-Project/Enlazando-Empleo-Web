import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmployeeCardComponent } from './register-employee-card.component';

describe('RegisterEmployeeCardComponent', () => {
  let component: RegisterEmployeeCardComponent;
  let fixture: ComponentFixture<RegisterEmployeeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEmployeeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEmployeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
