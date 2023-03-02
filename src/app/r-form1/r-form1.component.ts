import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormArray,FormGroup } from "@angular/forms";

@Component({
  selector: 'app-r-form1',
  templateUrl: './r-form1.component.html',
  styleUrls: ['./r-form1.component.css']
})
export class RForm1Component implements OnInit {

regForm!: FormGroup;

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.regForm=this.fb.group({
      name:[""],
      email:[""],
      password:[""],
    })
  }

  submitData(){
    console.log(this.regForm.value);
    

  }

}
