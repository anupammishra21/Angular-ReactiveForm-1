import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormArray,FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-r-form2',
  templateUrl: './r-form2.component.html',
  styleUrls: ['./r-form2.component.css']
})
export class RForm2Component implements OnInit {
  regForm!:FormGroup
  data:any={}

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.regForm=this.fb.group({
      firstname:["",[Validators.required]],
      email:[],
      altEmail:this.fb.array([]),
      altSkill:this.fb.array([]),
      password:[],
      
    })
  }

  get altEmail(){
    return this.regForm.get('altEmail') as FormArray
  }
// add email Function
  addEmail(){
    this.altEmail.push(this.fb.control(''))

  }

  // remove Email

  removeEmail(i:number){
    this.altEmail.removeAt(i)

  }

  // skills part

  newSkills():FormGroup {
    return this.fb.group({
      skill:[''],
      exp:[''],
    })

  }

  get altSkill(){
    return this.regForm.get('altSkill') as FormArray
  }

 

  addSkills(){
    this.altSkill.push(this.newSkills())
  }

  removeSkills(i:number){
    this.altSkill.removeAt(i)

  }





  dataSubmit(){
    console.log( " form values are :",this.regForm.value);
    this.data=this.regForm.value

   
    

  }
  resetForm(){
    this.regForm.reset()
  }

  rememberMe(){
    localStorage.setItem("token", JSON.stringify(this.regForm.value))
    
  }


}
