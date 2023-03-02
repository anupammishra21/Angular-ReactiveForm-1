import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  empSalary:number=0
  msg:string= ""

  constructor() { }

  ngOnInit(): void {
  }

  salaryIncrement(){
    this.empSalary = this.empSalary+500
    this.msg="salary incremented :"

  }

  salaryDecrement(){
    this.empSalary=this.empSalary-500
    this.msg="salary decremented :"
  }

}
