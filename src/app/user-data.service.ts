import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, Gender } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http : HttpClient) { }
  private SERVER_URL = 'http://localhost:80/php-api.php'
  getUsers() : Observable<any> {
    return this.http.get(this.SERVER_URL);
  }

  getUserById(id : Number) : Observable<any> {
    let queryParams = new HttpParams().set('id',id.toString());
    return this.http.get(this.SERVER_URL,{params: queryParams});
  }

  setOrCreateUser(userValues : any): Observable<any>{
    return this.http.post(this.SERVER_URL,userValues);
  }
}
