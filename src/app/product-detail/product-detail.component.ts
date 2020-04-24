import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }
  ngOnInit() {
    this.getProduct();
  }
getPriduct(){
    this.route.params.subscribe(param => {
        this.productService.getProduct(param.productID).subscribe(data => this.product = data);
    })
  }
 updateProduct(){
      this.productService.updateProduct(this.product).subscribe(data => {
        this.router.navigateByUrl("/products")
      });
  }
}