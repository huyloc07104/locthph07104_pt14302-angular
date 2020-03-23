import { Component, OnInit, Output } from '@angular/core';
import { product } from '../Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: product = new product();
  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
  }
  addProduct(){
    this.productService.addProduct(this.product);
  }
}