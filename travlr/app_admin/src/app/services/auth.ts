import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  login(credentials: any) {
    return this.http.post(
      'http://localhost:3000/api/login',
      credentials
    );
  }

}