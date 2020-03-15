import { Component, OnInit } from '@angular/core';
import { product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
product : product = {
  name: "Item 1",
  price: 25.99,
  desc: "nội dung sản phẩm",
  img: "http://placehold.it/700x400",
  status: true,
}
changeStatus(){
  this.product.status = false;
}
changeTitle(){

}
}