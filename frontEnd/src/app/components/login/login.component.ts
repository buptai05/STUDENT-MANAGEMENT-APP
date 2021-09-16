import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginUserData = <any>{}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    //console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          localStorage.setItem('emaildetails', res.data.user.email)
          localStorage.setItem('namedetails', res.data.user.name)
          this._router.navigate(['/students'])
        },
        err => console.log(err)
      )
  }

}
