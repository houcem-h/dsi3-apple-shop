import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient, HttpErrorResponse  } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from 'src/app/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private httpClient: HttpClient
  ) { }

  signup(user: User): Observable<any> {

    return this.httpClient.post(`${this.API_URL}/auth/signup`, user).pipe(
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
}
