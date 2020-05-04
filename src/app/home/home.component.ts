import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

selected: Product;
  products: Product[];

  constructor(
    private productService: ProductService
  ) { 
    console.log('constructor')
  }

  ngOnInit(): void {
    this.getProducts();
  }
 

  getProducts(){
    this.productService.getProducts().subscribe(data => {
      console.log(data)
      this.products = data;
     });
   }

  showDetail(product){
    console.log(product);
    this.selected = product;
  }
}