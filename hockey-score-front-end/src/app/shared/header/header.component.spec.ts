import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { AuthService } from '../auth.service';
import { Login } from '../model/user/login';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  const spy = jasmine.createSpyObj('AuthService', ['login', 'logout']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [CommonModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule
      ],
      providers: [{ provide: AuthService, useValue: spy }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authServiceSpy = TestBed.get(AuthService);
  });

  afterEach(() => fixture.destroy());

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#authservice should return stubbed value from a spy', () => {
    authServiceSpy.login.withArgs(new Login("", "")).and.stub;
  });

});
