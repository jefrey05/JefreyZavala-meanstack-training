import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfLoginPageComponent } from './login.component';

describe('TdfLoginPageComponent', () => {
  let component: TdfLoginPageComponent;
  let fixture: ComponentFixture<TdfLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
