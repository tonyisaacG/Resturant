import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../ViewModels/login-model';
import { RegisterModel } from '../ViewModels/register-model';
import { AuthUserService } from './auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class SignInUpService {

  constructor(private http:HttpClient,
              private auth:AuthUserService) { }


  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': `*/*`,
    "Authorization":`Bearer ${localStorage.getItem("AuthUserToken")}`
  });

  options = { headers: this.headers }
  
  Login(user:FormGroup):Observable<LoginModel>{
    return this.http.post<LoginModel>(`${environment.urlApi}/Authintications/login`,JSON.stringify(user),this.options).pipe(catchError(error=>{
      return throwError(error);
    }))
  }


  Register(user:RegisterModel):Observable<RegisterModel>{
    return this.http.post<RegisterModel>(`${environment.urlApi}/Authintications/register`,user).pipe(catchError(error=>{
      return throwError(error);
    }))
  }
}
