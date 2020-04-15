import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
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
   removeItem(id){
    this.productService.removeProduct(id).subscribe(response => {
     this.products = this.products.filter(product => product.id != response.id);
   })
    // this.products = this.products.filter(product => product.id != id);
  }


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
