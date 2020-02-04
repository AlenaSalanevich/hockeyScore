import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Login } from './model/user/login';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});


describe('AuthService login', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  let service: AuthService;
  beforeEach(() => {
    service = TestBed.get(AuthService);
  })

  it('should login with proper credentials', () => {
    const login = new Login("admin", "admin");
    service.login(login);
    expect(service.getIsLogin()).toBe(true);
  });

  it('should not login with wrong credentials', () => {
    service.login(new Login("", ""));
    expect(service.getIsLogin()).toBe(false);
  });


  it('should logout', () => {
    service.logout();
    expect(service.getIsLogin()).toBe(false);
  });
});


