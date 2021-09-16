import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

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



  editStudentData =<any>{};
  selectedFile : File = null;
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
  constructor(
    private studentService : StudentsService,
    private router:Router, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params.id)
    this.studentService.getCurrentStudent(this.activatedRoute.snapshot.params.id)
    .subscribe(Data => {
      this.editStudentData = Data;
      console.log(Data)
    })
    
  }

  updateStudent(id){
    const fromData = new FormData();
    fromData.append('name', this.editStudentData.name);
    fromData.append('email', this.editStudentData.email);
    fromData.append('phone', this.editStudentData.phone);
    fromData.append('discipline', this.editStudentData.discipline);
    fromData.append('department', this.editStudentData.department);
    fromData.append('year', this.editStudentData.year);
    fromData.append('passingYear', this.editStudentData.passingYear);
    fromData.append('universityRollNo', this.editStudentData.universityRollNo);
    fromData.append('studentImage', this.selectedFile, this.selectedFile.name);
    this.studentService.updateStudent(id,fromData)
        .subscribe(
          res => {
            console.log(res)
            this.router.navigate(['/students'])
          },
          err => console.log(err)
        )
        
  }

}
