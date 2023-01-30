import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTypeUserComponent } from './auth-type-user.component';

describe('AuthTypeUserComponent', () => {
  let component: AuthTypeUserComponent;
  let fixture: ComponentFixture<AuthTypeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthTypeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthTypeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
