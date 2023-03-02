import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localstorage2',
  templateUrl: './localstorage2.component.html',
  styleUrls: ['./localstorage2.component.css']
})
export class Localstorage2Component implements OnInit {

  title:any 
 

  constructor() { }

  ngOnInit(): void {
    this.title=localStorage.getItem("token")
  }
 

  add(){
    this.title="this is local storage"
    localStorage.setItem("token", this.title)

  }

  remove(){
    localStorage.removeItem("token")
    this.ngOnInit()

  }



}
