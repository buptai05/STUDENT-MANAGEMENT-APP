import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutesService } from '../../services/routes.service';
import { StudentsService } from 'src/app/services/students.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  href: string;
  name="";
  email="";
  panelOpenState = false;
  constructor(public _authService: AuthService,
    public studentsService: StudentsService,
    public route: ActivatedRoute, 
    private router: Router, 
    public routes: RoutesService) { }

  ngOnInit(): void {
    //this._authService.getLoginUser()
    // this.studentsService.refreshneeded$
    //  .subscribe(()=> {this.getToken();}
    //  );
    this.getToken()
  }
  isActive() {
    this.href = this.router.url;
  }
  getToken() {
    // localStorage.removeItem('details')
    this.email = localStorage.getItem('emaildetails')
    this.name = localStorage.getItem('namedetails')  }
}
