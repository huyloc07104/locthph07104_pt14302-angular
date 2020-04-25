import { Injectable } from '@angular/core';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { data } from "./MockData";

@Injectable()
export class ProductService {
 api = 'https://5e7cdb96a917d70016683f9f.mockapi.io/products';
  products = data;

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);

  }
  removeProduct(id): Observable<Product>{
    return this.http.del<Product>(`${this.api}/${id}`);

  }

  addProduct(product){
    return this.http.post<Product>(`${this.api}`, product);

  }
  updateProduct(product){
     return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }

}