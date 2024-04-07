import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { AuthStatus } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authStatus: AuthStatus = { isAuthenticated: false };

  constructor() {
    this.loadAuthStatus();
  }

  loadAuthStatus(): void {
    const authStatusStr = localStorage.getItem('authStatus');
    if (authStatusStr) {
      this.authStatus = JSON.parse(authStatusStr);
    }
  }

  login(user: { username: string; password: string }): Observable<boolean> {
    if (
      user.username === 'master8@lemoncode.net' &&
      user.password === '12345678'
    ) {
      localStorage.setItem('authStatus', 'authenticated');
      return of(true).pipe(delay(2000));
    }
    return of(false).pipe(delay(2000));
  }

  logout(): void {
    this.authStatus = {
      isAuthenticated: false,
    };
    localStorage.removeItem('authStatus');
  }

  isLogged(): boolean {
    return this.authStatus.isAuthenticated;
  }

  getUsername(): string | any {
    const getUser = localStorage.getItem('user');
    if (getUser) {
      const parseUser = JSON.parse(getUser);
      return parseUser.username;
    }
    const username = localStorage.getItem('username');
    return username;
  }

  setUser(user: { username: string; password: string }): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
