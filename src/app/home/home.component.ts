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
  // removeItem(id){
  //   this.products = this.productService.removeProduct(id);
  //   // this.products = this.products.filter(product => product.id != id);
  // }



  // changeStatus(){
  //   // this.product.status = !this.product.status;
  // }
  // changeName(e){
  //   // this.product.name = e.target.value;
  // }
  // removeItem(id){
  //   this.products = this.products.filter(product => product.id != id);
  // }
  showDetail(product){
    console.log(product);
    this.selected = product;
  }
}