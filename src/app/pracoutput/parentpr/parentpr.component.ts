import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentpr',
  templateUrl: './parentpr.component.html',
  styleUrls: ['./parentpr.component.css']
})
export class ParentprComponent implements OnInit {

  msg=""

  constructor() { }

  ngOnInit(): void {
  }

  updatedata(data:any){
    console.log(data);
    this.msg=data
    

  }

}
