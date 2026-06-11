import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private readonly TOKEN_KEY = 'sneaker-token';
  private isLoggedInSubject: BehaviorSubject<boolean>;

  isLoggedIn$: Observable<boolean>;

  constructor() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    this.isLoggedInSubject = new BehaviorSubject<boolean>(!!token);
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.isLoggedInSubject.next(true);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.isLoggedInSubject.next(false);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
