import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  msg=""

  constructor() { }

  ngOnInit(): void {
  }

  updateData(item:any){
    console.log(item);
    this.msg=item
    

  }

}
