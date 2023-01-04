import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const API_URL = 'http://localhost:8090/api/user2/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService ) { }

  getPublicContent(): Observable<any> {
    var token = window.sessionStorage.getItem('auth-token');

    var reqHeader = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

      return this.http.get(API_URL + 'view', { headers: reqHeader});
  }
}