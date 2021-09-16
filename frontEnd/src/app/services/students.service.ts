import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl} from '@angular/forms';
import { tap } from 'rxjs/operators'; 
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {


  private studentsUrl = "http://localhost:3000/"
  constructor(private http:HttpClient) { }

  private _refreshneeded$ = new Subject<any>();
  get refreshneeded$ () {
    return this._refreshneeded$;
  }
  
  getStudents(){
    return this.http.get<any>(this.studentsUrl)
  }
  addStudent(student){
    return this.http.post<any>(this.studentsUrl, student)
    .pipe(
      tap(()=> {this._refreshneeded$.next();

      })
    );
  }
  deleteStudent(id){
    return this.http.delete<any>(this.studentsUrl+id)
  }
  
  getCurrentStudent(id){
    return this.http.get<any>(this.studentsUrl+id)
  }

  updateStudent(id,data){
    return this.http.put<any>(this.studentsUrl+id,data)
  }
}
