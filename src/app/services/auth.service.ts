import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Router } from "@angular/router";

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { LocalStorageService } from "src/app/services/local-storage.service";

import { User } from 'src/app/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  public isLoggedIn:boolean = false;

  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.isLoggedIn = this.getAccessToken() ? true : false;
   }

  signup(user: User): Observable<any> {

    return this.httpClient.post(`${this.API_URL}/auth/signup`, user).pipe(
        catchError(this.handleError)
    )
  }

  login(user: User) {
    return this.httpClient.post<any>(`${this.API_URL}/auth/login`, user)
      .subscribe((res: any) => {
        this.isLoggedIn = true;
        this.localStorageService.set('access_token', res.token);
        this.router.navigate(['customer/profile/' + res.userId]);
        // this.getUserProfile(res.userId).subscribe((res) => {
        //   this.localStorageService.set('user', {email: res.email, id: res._id, name: res.name});
        // })
      })
  }

  getUserProfile(id: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/auth/profile/${id}`, { headers: this.headers }).pipe(
      map((res: Object) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let err;
    if (error.error instanceof ErrorEvent) {
      // client-side error
      err = {message: error.error.message};
    } else {
      // server-side error
      err = { code: error.status, message: error.message };
    }
    return throwError(err);
  }

  getAccessToken() {
    return this.localStorageService.get('access_token');
  }

  logout() {
    this.localStorageService.set('access_token', null);
    this.localStorageService.set('user', null);
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
