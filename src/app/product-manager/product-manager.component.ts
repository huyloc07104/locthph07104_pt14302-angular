import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { data } from '../MockData';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  products = data;
  selected: Product;
  showDetail(product){
  this.selected = product;
  }
  removeItem(id){
    return this.products = this.products.filter(product => product.id != id);
  }
}