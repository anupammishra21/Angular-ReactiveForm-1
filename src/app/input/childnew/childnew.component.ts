import { Component, OnInit,Inject, Input } from '@angular/core';

@Component({
  selector: 'app-childnew',
  templateUrl: './childnew.component.html',
  styleUrls: ['./childnew.component.css']
})
export class ChildnewComponent implements OnInit {
  @ Input() item=""

  constructor() { }

  ngOnInit(): void {
  }

}
