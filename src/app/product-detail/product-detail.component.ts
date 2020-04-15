import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
   product : Product
selected: Product;
  products: Product[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.route.params.subscribe(param => {
      this.productService.getProduct(param.id).subscribe(data => this.product = data);
    })
  }

}