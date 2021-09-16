import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentComponent } from './components/student/student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';
import { EditStudentComponent } from './components/edit-student/edit-student.component';


const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {
    path:'dashboard', 
    component:DashboardComponent,
    canActivate: [AuthGuard]},
  {
    path:'students', 
    component:StudentComponent,
    canActivate: [AuthGuard]},
  {
    path:'add-student', 
    component:AddStudentComponent,
    canActivate: [AuthGuard]},
  {
    path:'edit-student/:id', 
    component:EditStudentComponent,
    canActivate: [AuthGuard]},
    
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
