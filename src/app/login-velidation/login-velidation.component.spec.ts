import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVelidationComponent } from './login-velidation.component';

describe('LoginVelidationComponent', () => {
  let component: LoginVelidationComponent;
  let fixture: ComponentFixture<LoginVelidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginVelidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginVelidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
