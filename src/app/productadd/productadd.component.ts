import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
pro: Product = new Product();
  constructor(private productService: ProductService,) { }

  ngOnInit() {
  }
  addProduct(){
    this.productService.addProduct(this.pro);
  }

}