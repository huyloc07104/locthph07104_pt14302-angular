import { Component, OnInit } from '@angular/core';
import { product } from '../Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: product[];
  constructor(
    private productService: ProductService,
  ) { }
  
  ngOnInit(): void {
   this.getProducts();
  }


getProduct(){
this.productService.getProducts().subscribe(response => this.products = response, error => console.log(error));
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
  addToCart(){
    
  }
}
