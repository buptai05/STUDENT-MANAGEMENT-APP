import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  disciplines = [
    {id: 1, name: "BTech"},
    {id: 2, name: "MTech"},
    {id: 3, name: "MCA"}
  ];
  discipline = null;
  departments = [
    {id: 1, name: "CSE"},
    {id: 2, name: "IT"},
    {id: 3, name: "ME"},
    {id: 4, name: "EE"},
    {id: 5, name: "ECE"},
    {id: 6, name: "MCA"}
  ];
  department = null;

  years = [
    {id: 1, name: "1st"},
    {id: 2, name: "2nd"},
    {id: 3, name: "3rd"},
    {id: 4, name: "4th"}
  ];
  year = null;



  addStudentData =<any>{};
  selectedFile : File = null;
  // name = '';
  // email = '';
  // phone = '';
  // discipline ;
  // department = [];
  // year = [];
  // passingYear = '';
  // universityRollNo= '';
  


  // onStudentImageSelected(event){
  //   //console.log(event);
  //   this.selectedFile = <File>event.target.files[0];
  // }
  url;
  onStudentImageSelected(event) { // called each time file input changes
      if (event.target.files && event.target.files[0]) {
        var selectedFile = new FileReader();

        selectedFile.readAsDataURL(event.target.files[0]); // read file as data url

        selectedFile.onload = (event) => { // called once readAsDataURL is completed
          this.url = event.target.result;
        }
        this.selectedFile = <File>event.target.files[0];
      }
  }
  constructor(private studentService : StudentsService,private router:Router) { }

  ngOnInit(): void {
  }

  addStudent(){
    const fromData = new FormData();
    fromData.append('name', this.addStudentData.name);
    fromData.append('email', this.addStudentData.email);
    fromData.append('phone', this.addStudentData.phone);
    fromData.append('discipline', this.addStudentData.discipline);
    fromData.append('department', this.addStudentData.department);
    fromData.append('year', this.addStudentData.year);
    fromData.append('passingYear', this.addStudentData.passingYear);
    fromData.append('universityRollNo', this.addStudentData.universityRollNo);
    fromData.append('studentImage', this.selectedFile, this.selectedFile.name);
    this.studentService.addStudent(fromData)
        .subscribe(
          res => {
            console.log(res)
            this.router.navigate(['/students'])
          },
          err => console.log(err)
        )
        
  }

}
