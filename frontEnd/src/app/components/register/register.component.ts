import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  registerUserData =<any>{};
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);

  getNameErrorMessage(){
    return this.name.hasError('required') ? 'You must put your name' : '';
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private _authService : AuthService,
    private _router: Router) { }

  registerUser(){
    if(this.registerUserData.password!==this.registerUserData.password2)
     {console.log("Confirm password correctly");}

     else {
    this._authService.registerUser(this.registerUserData)
                      .subscribe(
                        res => {console.log(res), 
                          this._router.navigate(['/login'])},
                        err => console.log(err)
                      )
                        }
  }

  ngOnInit(): void {
  }
  

}
