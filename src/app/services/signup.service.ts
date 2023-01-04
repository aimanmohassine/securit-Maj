import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8090/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    console.log(username);
    return this.http.post(AUTH_API + `login?username=${username}&password=${password}`, {}, httpOptions);
  }

  register(username: string, name: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      name,
      password
    }, httpOptions);
  }
}