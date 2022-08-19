import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(private route: Router) {}

  Login(Token: any) {
    localStorage.setItem("AuthUserToken", Token);
    this.route.navigate(['admin']);
  }
  LogOut() {
    localStorage.removeItem("AuthUserToken");
    this.route.navigate(['signInOut']);
  }
  IsLoggin() {
    if (localStorage.getItem("AuthUserToken") != null) {
      return true;
    }
    else {
      return this.route.navigate(['signInOut']);
    }
  }
}
