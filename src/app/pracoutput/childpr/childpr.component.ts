import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childpr',
  templateUrl: './childpr.component.html',
  styleUrls: ['./childpr.component.css']
})
export class ChildprComponent implements OnInit {
  @Output() updatedataEvent= new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

}
