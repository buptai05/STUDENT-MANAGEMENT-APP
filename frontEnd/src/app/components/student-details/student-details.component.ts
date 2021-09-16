import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { StudentsService } from '../../services/students.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  name:string;
  constructor(public dialogRef:MatDialogRef<StudentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any,
    private studentService: StudentsService,
    private SnackBar: MatSnackBar,
    private router:Router)
    { if(data){
        this.name = data.name
             }  
    }

  ngOnInit(): void {
  }
  refreshList(){
    
  }

  studentDelete(id){
    if(confirm('Are you sure to delete ?? ')){
      this.studentService.deleteStudent(id).subscribe(res => {
        this.refreshList();
        this.SnackBar.open(res.toString(), '', {
          duration:5000,
          verticalPosition:'top'
        });
        //this.router.navigate(['/students'])
      });
    }
  }
}
