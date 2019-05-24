import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  isAuthenticated() {
    return localStorage.getItem('login') != null ? true : false;
  }

  login() {
    localStorage.setItem('login', 'true');
    this.router.navigate(['inbox']);
  }
}
