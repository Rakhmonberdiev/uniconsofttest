import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';

interface User {
  fullName: string;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser = signal<User | null>(null);
  private http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl + 'api/';
  loadUser() {
    return this.http
      .get<User>(this.baseUrl + 'profile', { withCredentials: true })
      .subscribe({
        next: (user) => {
          this.currentUser.set(user);
        },
        error: () => {
          this.currentUser.set(null);
        },
      });
  }

  login(username: string, password: string) {
    return this.http
      .post<User>(
        this.baseUrl + 'login',
        { username, password },
        { withCredentials: true }
      )
      .pipe(tap((user) => this.currentUser.set(user)));
  }
  logout() {
    return this.http
      .post(this.baseUrl + 'logout', {}, { withCredentials: true })
      .pipe(tap(() => this.currentUser.set(null)));
  }

  isAuthenticated(): boolean {
    return !!this.currentUser();
  }
}
