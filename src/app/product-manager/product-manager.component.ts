import { Component, OnInit } from '@angular/core';
import { product } from '../Product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  products: product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }



  
  // products;
  // selected: Product;
  // showDetail(product){
  //   this.selected = product;
  //   console.log(this.selected);
  // }
  removeItem(id){
    this.products = this.productService.removeProduct(id);
    // this.products = this.products.filter(product => product.id != id)
  }

}