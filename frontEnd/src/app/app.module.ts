import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialsModule  } from "./materials/materials.module";
import { FormsModule ,ReactiveFormsModule} from '@angular/forms'
import { RouterModule, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import{ AuthService } from './services/auth.service';
import { StudentsService} from "./services/students.service";
import { RoutesService} from "./services/routes.service";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentComponent } from './components/student/student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { from } from 'rxjs';
import { HighchartsChartModule } from 'highcharts-angular';
import { EditStudentComponent } from './components/edit-student/edit-student.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentComponent,
    AddStudentComponent,
    StudentDetailsComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    EditStudentComponent
  ],
  entryComponents:[StudentDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MaterialsModule,
    FlexLayoutModule,
    HighchartsChartModule
  ],
  providers: [AuthService,StudentsService,RoutesService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private readonly router: Router,
    private routes: RoutesService
  ) {
    router.events
      .subscribe((event: RouterEvent) => {
        if (event instanceof NavigationEnd) {
          this.routes.setRoute(event.url);
        }
      });
  }
}

