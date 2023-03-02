import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentnew',
  templateUrl: './parentnew.component.html',
  styleUrls: ['./parentnew.component.css']
})
export class ParentnewComponent implements OnInit {

 msg:string=""

  constructor() { }

  ngOnInit(): void {
  }

  cliced(){
    this.msg = "hey you i am anupam"
  }

}
