import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated() {
    return localStorage.getItem('login') != null ? true : false;
  }

  login() {
    localStorage.setItem('login', 'true');
  }
}
