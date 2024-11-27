import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserData } from '../../models/user.model';
import { environment } from '../../environments/environment.development';

@Injectable()
export class AuthService {
  http = inject(HttpClient);
  private currentUserSubject: BehaviorSubject<UserData | null>;
  public currentUser: Observable<UserData | null>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<UserData | null>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserData | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${environment.baseUrl}/api/login`, {
        email,
        password,
      })
      .pipe(
        map((res) => {
          // login successful if there's a jwt token in the response
          if (res && res.user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(res.user));
            this.currentUserSubject.next(res.user);
          }
          return res;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null!);
  }
}
