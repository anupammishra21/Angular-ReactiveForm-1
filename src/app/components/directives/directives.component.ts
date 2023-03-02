import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  show=false
  color="red"
  colorNew='red'

  personDetails=[
    {name:"anupam",gender:"male",age:23},
    {name:"oindrila",gender:"female",age:20},
    {name:"biswa",gender:"male",age:23},
    {name:"souvik",gender:"male",age:24},
   
    
  ]


  personNewDetails=[
    {name:"anupam",gender:"male",age:23,accounts:["facebook","insta"]},
    {name:"oindrila",gender:"female",age:20,accounts:["facebook","insta","gmail","twitter"]},
    {name:"biswa",gender:"male",age:23,accounts:["facebook","insta","gmail",]},
    {name:"souvik",gender:"male",age:24,accounts:["facebook","insta","twitter"]},
   
    
  ]

  users=["anuam", "oindrila","abhishek","sayani"]

  // attribute directive part
  // ng style
  myStyles={
    width:"100px",
    height:"150px",
    background:"red",
    color:"green"

  }

  // ngclass part

  myClasses={
    box:true,
    b:true,
    icon:false,
    border:false,
    circle:false

  }



  constructor() { }

  ngOnInit(): void {
  }
  // ng style part

  addStyles(){
    this.myStyles['color'] ='white';
    this.myStyles['background'] ='green';
    
  }


  changeShape(){
    this.myClasses.border=true
    this.myClasses.circle=true
    

  }

}
