import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginEmployerComponent } from './auth-login-employer.component';

describe('AuthLoginEmployerComponent', () => {
  let component: AuthLoginEmployerComponent;
  let fixture: ComponentFixture<AuthLoginEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLoginEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLoginEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
