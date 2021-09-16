import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import * as Highcharts from 'highcharts';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  total;
  xnumbers =[0,0,0,0,0];
  students =[];
  chartOptions = {};
  Highcharts = Highcharts;
  constructor(private studentsService : StudentsService) { }
  
//   getTotalStudents(){
//     this.studentsService.getStudents().subscribe(
//       // res => this.students =res,
//       res =>{console.log(res.length) 
//       this.total = res.length} ,
//       err => console.log(err),
//     )
//      //this.total = this.students.length;
//   }
  ngOnInit(): void {
    this.getTotalStudents();
    this.chartOptions = {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Total Students in each Departments'
      },
      accessibility: {
          announceNewData: {
              enabled: true
          }
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
          title: {
              text: 'Total students Department-Wise'
          }
  
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          series: {
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
                  format: '{point.y}'
              }
          }
      },
  
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
      },
  
      series: [
          {
              name: "Department",
              colorByPoint: true,
              data: [
                  {
                      name: "CSE",
                      y: this.total,
                  },
                  {
                      name: "IT",
                      y: 10,
                  },
                  {
                      name: "EE",
                      y: 7,
                  },
                  {
                      name: "ME",
                      y: 5,
                  },
                  {
                      name: "ECE",
                      y: 4,
                  },
                  {
                      name: "MCA",
                      y: 1,
                  }
              ]
          }
      ]
  }

  
  
  }

//   Dashboard Filter wrt Department
async getTotalStudents(){
    this.studentsService.getStudents().subscribe(
      // res => this.students =res,
      res =>{console.log(res.length) 
        this.students = res;
      this.total = res.length
      console.log(this.students[0])
        let m=0
        let a=0 
        let b=0
        for(m=0; m<this.total; m++)
         {
           if(this.students[m].department==='IT')
             {a++; this.xnumbers[0]=a}
            else if(this.students[m].department==='CSE')
              {b++; this.xnumbers[1]=b}
         }
     
      console.log(a)
      console.log(b)
    
    
    } ,
      err => console.log(err),
    )
     //this.total = this.students.length;
    //  await this.filter()
  }


  
}
