import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent implements OnInit {
  name: string = 'anupam';
  status: boolean = false;
  msg: string = '';
  show: string = '';
  userName: string = '';

  constructor() {}

  ngOnInit(): void {}
  method() {
    return 'data' + this.name;
  }
  AddtoCart() {
    return (this.msg = 'Product added in cart');
  }

  onClick(event: any) {
    console.log(event.target.value);
  }

  addedCart(event: any) {
   
    this.show = event.target.value + 'added in cart';
  }

  clickMe(reference: any) {
    console.log('regerence ', reference.value);
  }
}
