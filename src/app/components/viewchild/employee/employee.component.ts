import { Component, OnInit, ViewChild } from '@angular/core';
import { SalaryComponent } from '../salary/salary.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  @ViewChild(SalaryComponent) Component: SalaryComponent | undefined;

  constructor() {}

  ngOnInit(): void {}

  increment() {
    console.log('salary incremented');
    this.Component?.salaryIncrement();
  }

  decrement() {
    console.log('salary decremented');
    this.Component?.salaryDecrement();
  }
}
