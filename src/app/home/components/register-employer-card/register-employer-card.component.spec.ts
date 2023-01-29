import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmployerCardComponent } from './register-employer-card.component';

describe('RegisterEmployerCardComponent', () => {
  let component: RegisterEmployerCardComponent;
  let fixture: ComponentFixture<RegisterEmployerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEmployerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEmployerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
