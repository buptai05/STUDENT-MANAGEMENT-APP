import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import {MatDialog} from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  total;
  querry =<any>{};
  listView = true;
  students = [];
  filtered = [];
  backup = [];
  // filteredstudents = [];
  selectedStudent;
  showStudents;

  constructor(private studentsService : StudentsService,public dialog: MatDialog) { }
  
  ngOnInit(): void {
    // this.studentsService.getStudents()
    //     .subscribe(
    //       res => this.students =res,
    //       err => console.log(err)
    //     )
    // this.addquerry()
    // if((this.querry.year)||(this.querry.department))
    //   {this.students=this.filtered}
    
     
    this.studentsService.refreshneeded$
     .subscribe(()=> {this.getallStudents();}
     ); 
    this.getallStudents();
  }
  getallStudents() {
    this.studentsService.getStudents()
      .subscribe(
        res => {this.students = res
          console.log("here i am")
          this.total = res.length
          this.backup=this.students
          // if((this.querry.year)||(this.querry.department))
          // { }
        },
        err => console.log(err)
    
      )
  }
  // openDialog() {
  //   this.dialog.open(AddStudentComponent,{
  //     // width:'620px'
  //   });
  // }

  openDialogToView(student){
   let dialogRef = this.dialog.open(StudentDetailsComponent, {
     width:'500px',
     data:student
   });
   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result ${result}`)
   })
  }
  addquerry(){
    // console.log(this.querry)
    // console.log(this.total)
    // console.log(this.querry.department===this.students[0].department)
    // console.log(this.students[0])
    // this.students=this.backup
    console.log("repeat")
    let m=0;
    let a=0;
    let filteredstudents = [];
     if(!this.querry.department)
       { for(m=0; m<this.total; m++)
           { if(this.querry.year===this.students[m].year)
               filteredstudents[a]=this.students[m]
         a++;
           }
          //  console.log(filteredstudents)
       }


      else if(!this.querry.year)
       { for(m=0; m<this.total; m++)
           { if(this.querry.department===this.students[m].department)
            filteredstudents[a]=this.students[m]
         a++;
           }
          //  console.log(filteredstudents)
       }
    // let m=0;
    // let a=0;
  else  {
    while( m<this.total)
     { if( (this.querry.department===this.students[m].department) && (this.querry.year===this.students[m].year) )
                 filteredstudents[a]=this.students[m]
       
     m++;
     a++;
        }
    //  console.log(filteredstudents)
       }
       this.filtered=filteredstudents
       this.students=this.filtered
       console.log(this.filtered)
      //  console.log(this.backup)
       
  }
}
