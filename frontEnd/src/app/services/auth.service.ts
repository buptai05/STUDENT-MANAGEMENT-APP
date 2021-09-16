import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private reigsterUrl = 'http://localhost:3000/api/register';
  private loginUrl = 'http://localhost:3000/api/login';
  constructor(private _http : HttpClient,
    private _router: Router) { }

  registerUser(user){
    return this._http.post<any>(this.reigsterUrl,user)
  }
  loginUser(user){
    return this._http.post<any>(this.loginUrl,user)
  }
  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
  //Login User Details

  getLoginUser(){
    return localStorage.getItem('data')
  }
}
